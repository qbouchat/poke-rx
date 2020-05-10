import { APIResourceDto } from './api-resource-dto.interface';
import { PokemonHeldItemVersionDto } from './pokemon-held-item-version-dto.interface';

export interface PokemonHeldItemDto {
    item: APIResourceDto;
    version_details: PokemonHeldItemVersionDto;
}
