import { APIResourceDto } from './api-resource-dto.interface';

export interface PokemonMoveVersionDto {
    move_learn_method: APIResourceDto;
    version_group: APIResourceDto;
    level_learned_at: number;
}
