import { APIResourceDto } from './api-resource-dto.interface';

export interface PokemonSpeciesDto {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: APIResourceDto;
    pokedex_numbers: any[];
    egg_groups: APIResourceDto;
    color: APIResourceDto;
    shape: APIResourceDto;
    evolves_from_species: APIResourceDto;
    evolution_chain: APIResourceDto;
    habitat: APIResourceDto;
    generation: APIResourceDto;
    names: any[];
    pal_park_encounters: any[];
    flavor_text_entries: any[];
    form_descriptions: any[];
    genera: any[];
    varieties: any[];
}
