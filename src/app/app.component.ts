import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, timer } from 'rxjs';
import { exhaustMap, map, shareReplay, switchMap, takeUntil, repeatWhen } from 'rxjs/operators';
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

    private stopTimer$ = new Subject();
    private startTimer$ = new Subject();

    constructor(
        private pokeapiService: PokeapiService,
        private router: Router
    ) {}

    public ngOnInit() {
        this.pokemons$ = this.pokeapiService.getAllPokemons().pipe(
            shareReplay(1)
        );

        const timerGenerate = timer(0, 30000).pipe(
            takeUntil(this.stopTimer$),
            repeatWhen(() => this.startTimer$)
        );

        this.randomPokemon$ = timerGenerate.pipe(
            exhaustMap(() => {
                return this.getRandomPokemon().pipe(
                    switchMap((random) => {
                        return this.pokeapiService.getPokemonDetails(random.id);
                    })
                );
            })
        );
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
        this.stopTimer$.next();
        this.startTimer$.next();
    }

    private getRandomPokemon() {
        return this.pokemons$.pipe(
            map((pokemons) => {
                const random =  Math.floor(Math.random() * pokemons.length);
                return pokemons[random];
            })
        );
    }
}
