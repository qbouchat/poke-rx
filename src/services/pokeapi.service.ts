import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, merge, Observable } from 'rxjs';
import { catchError, map, shareReplay, switchMap, take, toArray, skip } from 'rxjs/operators';

import { Pokemon, Move } from '../models';
import { APIResourceListDto, PokemonDto, APIResourceDto } from '../models/interface';

@Injectable({
    providedIn: 'root'
})
export class PokeapiService {

    static readonly BASE_URL = 'https://pokeapi.co/api/v2/';

    private apiResourceCache: { [key: string]: Observable<any> } = {};

    constructor(
        private http: HttpClient
    ) { }

    public getAllPokemons(): Observable<{
        name: string;
        id: number;
    }[]> {
        let params = new HttpParams();
        params = params.set('limit', '999999'); // Retrieve all

        return this.http.get<APIResourceListDto<PokemonDto>>(`${PokeapiService.BASE_URL}pokemon`, {
            params
        }).pipe(
            map(list => list.results.map(pokemon => {
                const regex = new RegExp(`${PokeapiService.BASE_URL}pokemon/([0-9]+)/`);
                const id = Number(pokemon.url.match(regex)[1]);
                return {
                    name: pokemon.name,
                    id
                };
            }))
        );
    }

    public getPokemonDetails(id: number): Observable<Pokemon> {
        return this.retriveApiResource<PokemonDto>({
            url: `${PokeapiService.BASE_URL}pokemon/${id}`
        }).pipe(
            switchMap(pokemonDto => {

                const typesCalls = forkJoin(pokemonDto.types.map(type => this.retriveApiResource(type.type)));
                const abilitiesCalls = forkJoin(pokemonDto.abilities.map(ability => {
                    return this.retriveApiResource(ability.ability).pipe(
                        map(abilityDto => {
                            return {
                                hidden: ability.is_hidden,
                                ability: abilityDto
                            };
                        })
                    );
                }));

                return forkJoin([typesCalls, abilitiesCalls]).pipe(
                    map(([typesDto, abilitesDto]) => {
                        return Pokemon.fromDto(pokemonDto, typesDto, abilitesDto);
                    })
                );
            })
        );
    }

    public getPokemonMovesCalls(pokemonId: number): Observable<Observable<Move>> {
        return this.retriveApiResource<PokemonDto>({
            url: `${PokeapiService.BASE_URL}pokemon/${pokemonId}`
        }).pipe(
            switchMap(pokemonDto => {
                return pokemonDto.moves.map(move => this.retriveApiResource(move.move).pipe(
                    map(moveDto => Move.fromDto(moveDto))
                ));
            }),
        );
    }

    //#region API RESOURCE CACHE

    private retriveApiResource<T>(apiResource: APIResourceDto<T>): Observable<T> {
        if (!this.apiResourceCache[apiResource.url]) {
            this.apiResourceCache[apiResource.url] = this.http.get(apiResource.url).pipe(
                shareReplay({ bufferSize: 1, refCount: true }), // refCount for cancel call
                catchError(() => {
                    delete this.apiResourceCache[apiResource.url];
                    return EMPTY;
                })
            );
        }

        return this.apiResourceCache[apiResource.url];
    }

    //#endregion

}
