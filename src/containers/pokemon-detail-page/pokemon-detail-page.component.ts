import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Move, Pokemon } from 'src/models';

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

        // TODO: 3. Retrieve Pokemon details by calling getPokemonDetails
        // this.pokemon$ = this.pokeapiService.getPokemonDetails(pokemonId)


        // TODO: 4. Retrieve Pokemon moves paginated with getPokemonMovesCalls(pokemonId)
        // this.pokemonMoves$ = this.pokeapiService.getPokemonMovesCalls(pokemonId);
    }

    public changeMovesPagination(page: PageEvent) {
        this.page$.next(page);
    }

}
