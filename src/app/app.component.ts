import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/models';

import { PokeapiService } from '../services/pokeapi.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public pokemons$: Observable<{
        name: string;
        id: number;
    }[]>;
    public randomPokemon$: Observable<Pokemon>;

    constructor(
        private pokeapiService: PokeapiService,
        private router: Router
    ) {}

    public ngOnInit() {
        // TODO: 1. Retrieve pokemons list with getAllPokemons
        // this.pokemons$ = ...


        // TODO: 5. Retrieve random pokemon
        // this.randomPokemon$ = ...
    }

    public showPokemon(pokemon: {
        name: string;
        id: number;
    }) {
        if (pokemon) {
            this.router.navigate([pokemon.id]);
        }
    }

    public newRandomPokemon() {
        // TODO: 6. Implement action of generating new random pokemon
    }
}
