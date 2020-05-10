import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Move, Pokemon } from '../models';
import { APIResourceDto, APIResourceListDto, PokemonDto } from '../models/interface';

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
            map(pokemonDto => {
                // TODO: 3. Retrieve types and abilities (with calls)
                // NB: abilites should be map to { hidden: boolean; ability: AbilityDto }
                // where hidden is from the properties in the pokemonDto
                return Pokemon.fromDto(pokemonDto, null, null);
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
        // TODO: 2. Implement cache
        return this.apiResourceCache[apiResource.url];
    }

    //#endregion

}
