import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Probabilidad } from "./probabilidad.entity";
import { ProbabilidadRepository } from "./probabilidad.repository";

@Injectable()
export class ProbabilidadService {
    constructor(@InjectRepository(ProbabilidadRepository) private probabilidadRepository: ProbabilidadRepository) { }

    async getAll(): Promise<Probabilidad[]> {
        return this.probabilidadRepository.getAll();
    }
}