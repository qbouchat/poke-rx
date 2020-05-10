import { APIResourceDto } from './api-resource-dto.interface';

export interface FlavorTextDto {
    flavor_text: string;
    language: APIResourceDto;
    version_group: APIResourceDto;
}
