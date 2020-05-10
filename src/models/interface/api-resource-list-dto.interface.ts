import { APIResourceDto } from './api-resource-dto.interface';

export interface APIResourceListDto<T = any> {
    count: number;
    next: string;
    previous: string;
    results: APIResourceDto<T>[];
}
