import { APIResourceDto } from './api-resource-dto.interface';

export interface PokemonStatDto {
    stat: APIResourceDto;
    effort: number;
    base_stat: number;
}
