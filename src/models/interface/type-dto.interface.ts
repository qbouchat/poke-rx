import { APIResourceDto } from './api-resource-dto.interface';
import { MoveDto } from './move-dto.interface';
import { NameDto } from './name-dto.interface';
import { PokemonDto } from './pokemon-dto.interface';

export interface TypeDto {
    id: number;
    name: string;
    damage_relations: {
        no_damage_to: APIResourceDto<TypeDto>[];
        half_damage_to: APIResourceDto<TypeDto>[];
        double_damage_to: APIResourceDto<TypeDto>[];
        no_damage_from: APIResourceDto<TypeDto>[];
        half_damage_from: APIResourceDto<TypeDto>[];
        double_damage_from: APIResourceDto<TypeDto>[];
    };
    game_indices: any[];
    generation: APIResourceDto;
    move_damage_class: APIResourceDto;
    names: NameDto[];
    pokemon: {
        slot: number;
        pokemon: APIResourceDto<PokemonDto>;
    }[];
    moves: APIResourceDto<MoveDto>[];
}
