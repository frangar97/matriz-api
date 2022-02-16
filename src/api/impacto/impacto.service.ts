import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Impacto } from "./impacto.entity";
import { ImpactoRepository } from "./impacto.repository";

@Injectable()
export class ImpactoService {
    constructor(@InjectRepository(ImpactoRepository) private impactoRepository: ImpactoRepository) { }

    async getAll(): Promise<Impacto[]> {
        return this.impactoRepository.getAll();
    }
}