import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, forkJoin } from 'rxjs';
import { map, switchMap, skip, take, toArray, tap } from 'rxjs/operators';
import { Pokemon, Move } from 'src/models';

import { PokeapiService } from '../../services/pokeapi.service';

@Component({
    selector: 'app-pokemon-detail-page',
    templateUrl: './pokemon-detail-page.component.html',
    styleUrls: ['./pokemon-detail-page.component.scss']
})
export class PokemonDetailPageComponent implements OnInit {

    public pokemon$: Observable<Pokemon>;
    public pokemonMoves$: Observable<Move[]>;
    public pokemonMovesTotalCount$: Observable<number>;

    public page$ = new BehaviorSubject<PageEvent>(new PageEvent());

    constructor(
        private activatedRoute: ActivatedRoute,
        private pokeapiService: PokeapiService
    ) { }

    ngOnInit() {
        const pokemonId$ = this.activatedRoute.params.pipe(
            map(params => Number(params.id))
        );

        this.pokemon$ = pokemonId$.pipe(
            switchMap(pokemonId => this.pokeapiService.getPokemonDetails(pokemonId)),
            tap((pokemon) => this.page$.next({
                pageIndex: 0,
                pageSize: 10,
                length: pokemon.moves.length
            })) // Reset pagination
        );

        const pokemonMovesCalls$ = pokemonId$.pipe(
            switchMap(pokemonId => {
                return this.pokeapiService.getPokemonMovesCalls(pokemonId);
            })
        );

        this.pokemonMoves$ = this.page$.pipe(
            switchMap((page) => {
                return pokemonMovesCalls$.pipe(
                    skip(page.pageIndex * page.pageSize),
                    take(page.pageSize),
                    toArray(),
                    switchMap(calls => forkJoin(calls)),
                );
            })
        );
    }

    public changeMovesPagination(page: PageEvent) {
        this.page$.next(page);
    }

}
