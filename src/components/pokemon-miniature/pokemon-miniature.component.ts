import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/models';

@Component({
    selector: 'app-pokemon-miniature',
    templateUrl: './pokemon-miniature.component.html',
    styleUrls: ['./pokemon-miniature.component.scss']
})
export class PokemonMiniatureComponent implements OnInit {

    @Input() pokemon: Pokemon;

    constructor() { }

    ngOnInit() {
    }

}
