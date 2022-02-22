import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoEjecucion } from "./tipo-ejecucion.entity";
import { TipoEjecucionRepository } from "./tipo-ejecucion.repository";


@Injectable()
export class TipoEjecucionService {
    constructor(@InjectRepository(TipoEjecucionRepository) private tipoControlRepository: TipoEjecucionRepository) { }

    async getAll(): Promise<TipoEjecucion[]> {
        return this.tipoControlRepository.find();
    }
}