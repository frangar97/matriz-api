import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoControl } from "./tipo-control.entity";
import { TipoControlRepository } from "./tipo-control.repository";


@Injectable()
export class TipoControlService {
    constructor(@InjectRepository(TipoControlRepository) private tipoControlRepository: TipoControlRepository) { }

    async getAll(): Promise<TipoControl[]> {
        return this.tipoControlRepository.find();
    }
}