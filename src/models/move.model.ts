import { MoveDto } from './interface/move-dto.interface';

export class Move {
    public id: number;
    public name: string;
    public description: string;
    public accuracy: number;
    public effectChance: number;
    public pp: number;
    public priority: number;
    public power: number;
    public type: string;

    constructor(base?: Partial<Move>) {
        Object.assign(this, base);
    }

    public static fromDto(dto: MoveDto) {
        if (!dto) {
            return null;
        }

        const effectEntry = dto.effect_entries.find(entry => entry.language.name === 'en');

        return new Move({
            id: dto.id,
            name: dto.name,
            description: effectEntry ? effectEntry.effect : null,
            accuracy: dto.accuracy,
            effectChance: dto.effect_chance,
            pp: dto.pp,
            priority: dto.priority,
            power: dto.power,
            type: dto.type.name
        });
    }
}
