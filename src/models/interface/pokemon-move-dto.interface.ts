import { APIResourceDto } from './api-resource-dto.interface';
import { MoveDto } from './move-dto.interface';
import { PokemonMoveVersionDto } from './pokemon-move-version.interface';

export interface PokemonMoveDto {
    move: APIResourceDto<MoveDto>;
    version_group_details: PokemonMoveVersionDto[];
}
