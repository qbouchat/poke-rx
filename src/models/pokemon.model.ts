import { PokemonDto } from './interface/pokemon-dto.interface';
import { Type } from './type.model';
import { TypeDto } from './interface/type-dto.interface';
import { AbilityDto } from './interface/ability-dto.interface';
import { Ability } from './ability.model';
import { Stat } from './stat.model';

export class Pokemon {
    public id: number;
    public name: string;
    public order: number;

    public sprite: string;
    public spriteBack: string;
    public spriteShiny: string;
    public spriteBackShiny: string;

    public height: number;
    public weight: number;

    public types: Type[];

    public abilities: Ability[];

    public moves: string[];

    public stats: Stat[];

    constructor(base?: Partial<Pokemon>) {
        Object.assign(this, base);
    }

    public static fromDto(dto: PokemonDto, typesDto: TypeDto[], abilitesDto: { hidden: boolean; ability: AbilityDto }[]) {
        if (!dto) {
            return null;
        }

        return new Pokemon({
            id: dto.id,
            name: dto.name,
            order: dto.order,
            sprite: dto.sprites.front_default,
            spriteBack: dto.sprites.back_default,
            spriteShiny: dto.sprites.front_shiny,
            spriteBackShiny: dto.sprites.back_shiny,
            height: dto.height,
            weight: dto.weight,
            types: typesDto ? typesDto.map(type => Type.fromDto(type)) : [],
            abilities: abilitesDto ? abilitesDto.map(ability => Ability.fromDto(ability)) : [],
            moves: dto.moves.map(move => move.move.name),
            stats: dto.stats.map(stat => Stat.fromDto(stat)),
        });
    }
}
