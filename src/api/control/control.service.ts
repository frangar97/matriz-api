import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoControlRepository } from "../tipo-control/tipo-control.repository";
import { TipoEjecucionRepository } from "../tipo-ejecucion/tipo-ejecucion.repository";
import { Control } from "./control.entity";
import { ControlRepository } from "./control.repository";
import { CrearControlDto } from "./dto/crear-control.dto";

@Injectable()
export class ControlService {
    constructor(
        @InjectRepository(ControlRepository) private controlRepository: ControlRepository,
        @InjectRepository(TipoControlRepository) private tipoControlRepository: TipoControlRepository,
        @InjectRepository(TipoEjecucionRepository) private tipoEjecucionRepository: TipoEjecucionRepository,
    ) { }

    async getAll(): Promise<Control[]> {
        const query = await this.controlRepository.createQueryBuilder("control")
            .innerJoinAndSelect("control.tipoControl", "tipoControl")
            .innerJoinAndSelect("control.tipoEjecucion", "tipoEjecucion")
            .select(["control.id", "control.nombre", "tipoControl.tipo", "tipoEjecucion.tipo"])
            .getMany();

        return query;
    }

    async createControl(crearControlDto: CrearControlDto): Promise<Control> {
        const { nombre, tipoControlId, tipoEjecucionId } = crearControlDto;

        const control = await this.tipoControlRepository.findOne(tipoControlId);
        if (!control) {
            throw new NotFoundException(`El tipo de control con el id ${tipoControlId} no existe`);
        }

        const ejecucion = await this.tipoEjecucionRepository.findOne(tipoEjecucionId);
        if (!ejecucion) {
            throw new NotFoundException(`El tipo de ejecucion con el id ${tipoEjecucionId} no existe`);
        }

        return await this.controlRepository.createControl(nombre, control, ejecucion);
    }
}