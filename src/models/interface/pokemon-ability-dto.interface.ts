import { AbilityDto } from './ability-dto.interface';
import { APIResourceDto } from './api-resource-dto.interface';

export interface PokemonAbilityDto {
    is_hidden: boolean;
    slot: number;
    ability: APIResourceDto<AbilityDto>;
}
