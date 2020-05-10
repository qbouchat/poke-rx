import { PokemonStatDto } from './interface/pokemon-stat-dto.interface';

export class Stat {
    public name: string;
    public value: number;

    constructor(base?: Partial<Stat>) {
        Object.assign(this, base);
    }

    public static fromDto(dto: PokemonStatDto) {
        if (!dto) {
            return null;
        }

        return new Stat({
            name: dto.stat.name,
            value: dto.base_stat
        });
    }
}
