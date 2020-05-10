import { APIResourceDto } from './api-resource-dto.interface';

export interface MoveMetaDataDto {
    ailment: APIResourceDto;
    category: APIResourceDto;
    min_hits?: number;
    max_hits?: number;
    min_turns?: number;
    max_turns?: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}
