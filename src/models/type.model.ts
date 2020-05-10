import { TypeDto } from './interface/type-dto.interface';

export class Type {
    public id: number;
    public name: string;

    constructor(base?: Partial<Type>) {
        Object.assign(this, base);
    }

    public static fromDto(dto: TypeDto) {
        if (!dto) {
            return null;
        }

        return new Type({
            id: dto.id,
            name: dto.name,
        });
    }
}
