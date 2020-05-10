import { APIResourceDto } from './api-resource-dto.interface';
import { PokemonAbilityDto } from './pokemon-ability-dto.interface';
import { PokemonHeldItemDto } from './pokemon-held-item-dto.interface';
import { PokemonMoveDto } from './pokemon-move-dto.interface';
import { PokemonSpritesDto } from './pokemon-sprites-dto.interface';
import { PokemonStatDto } from './pokemon-stat-dto.interface';
import { PokemonTypeDto } from './pokemon-type-dto.interface';
import { VersionGameIndexDto } from './version-game-index-dto.interface';
import { PokemonSpeciesDto } from './pokemon-species-dto.interface';

export interface PokemonDto {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbilityDto[];
    forms: APIResourceDto[];
    game_indices: VersionGameIndexDto[];
    held_items: PokemonHeldItemDto[];
    location_area_encounters: string;
    moves: PokemonMoveDto[];
    sprites: PokemonSpritesDto;
    species: APIResourceDto<PokemonSpeciesDto>;
    stats: PokemonStatDto[];
    types: PokemonTypeDto[];
}
