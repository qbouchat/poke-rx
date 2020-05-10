import { APIResourceDto } from './api-resource-dto.interface';
import { EffectDto } from './effect-dto.interface';
import { FlavorTextDto } from './flavor-text-dto.interface';
import { NameDto } from './name-dto.interface';
import { PokemonDto } from './pokemon-dto.interface';

export interface AbilityDto {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: APIResourceDto;
    names: NameDto[];
    effect_entries: EffectDto[];
    effect_changes: any[];
    flavor_text_entries: FlavorTextDto[];
    pokemon: {
        is_hidden: boolean;
        slot: number;
        pokemon: APIResourceDto<PokemonDto>;
    }[];
}
