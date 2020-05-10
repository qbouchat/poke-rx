import { APIResourceDto } from './api-resource-dto.interface';
import { EffectDto } from './effect-dto.interface';
import { FlavorTextDto } from './flavor-text-dto.interface';
import { MoveMetaDataDto } from './move-meta-data-dto.interface';
import { NameDto } from './name-dto.interface';
import { TypeDto } from './type-dto.interface';

export interface MoveDto {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
    contest_combos: any;
    contest_type: APIResourceDto;
    contest_effect: APIResourceDto;
    damage_class: APIResourceDto;
    effect_entries: EffectDto[];
    effect_changes: any[];
    flavor_text_entries: FlavorTextDto[];
    generation: APIResourceDto;
    machines: {
        machine: APIResourceDto;
        version_group: APIResourceDto;
    }[];
    meta: MoveMetaDataDto;
    names: NameDto[];
    past_values: any[];
    stat_changes: {
        chance: number;
        stat: APIResourceDto;
    }[];
    super_contest_effect: APIResourceDto;
    target: APIResourceDto;
    type: APIResourceDto<TypeDto>;
}
