import { AbilityDto } from './interface/ability-dto.interface';

export class Ability {
    public id: number;
    public hidden: boolean;
    public name: string;
    public effect: string;

    constructor(base?: Partial<Ability>) {
        Object.assign(this, base);
    }

    public static fromDto(dto: { hidden: boolean; ability: AbilityDto }) {
        if (!dto) {
            return null;
        }

        const effectEntry = dto.ability.effect_entries.find(entry => entry.language.name === 'en');
        return new Ability({
            id: dto.ability.id,
            hidden: dto.hidden,
            name: dto.ability.name,
            effect: effectEntry ? effectEntry.effect : null
        });
    }
}
