import { APIResourceDto } from './api-resource-dto.interface';
import { TypeDto } from './type-dto.interface';

export interface PokemonTypeDto {
    slot: number;
    type: APIResourceDto<TypeDto>;
}
