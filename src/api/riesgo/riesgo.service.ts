import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Control } from "../control/control.entity";
import { ControlRepository } from "../control/control.repository";
import { ImpactoRepository } from "../impacto/impacto.repository";
import { ProbabilidadRepository } from "../probabilidad/probabilidad.repository";
import { RespuestaRepository } from "../respuesta/respuesta.repository";
import { CrearRiesgoDto } from "./dto/crear-riesgo.dto";
import { Riesgo } from "./riesgo.entity";
import { RiesgoRepository } from "./riesgo.repository";

@Injectable()
export class RiesgoService {
    constructor(
        @InjectRepository(RiesgoRepository) private riesgoRepository: RiesgoRepository,
        @InjectRepository(ProbabilidadRepository) private probabiliadRepository: ProbabilidadRepository,
        @InjectRepository(ImpactoRepository) private impactoRepository: ImpactoRepository,
        @InjectRepository(RespuestaRepository) private respuestaRepository: RespuestaRepository,
        @InjectRepository(ControlRepository) private controlRepository: ControlRepository,
    ) { }

    async getAll(): Promise<Riesgo[]> {
        const query = await this.riesgoRepository.createQueryBuilder("riesgo")
            .leftJoinAndSelect("riesgo.probabilidad", "probabilidad")
            .leftJoinAndSelect("riesgo.impacto", "impacto")
            .leftJoinAndSelect("riesgo.respuesta", "respuesta")
            .leftJoinAndSelect("riesgo.controles", "controles")
            .leftJoinAndSelect("controles.tipoControl", "tipoControl")
            .leftJoinAndSelect("controles.tipoEjecucion", "tipoEjecucion")
            .select(["riesgo.id", "riesgo.nombre", "riesgo.owner", "riesgo.costo", "probabilidad.probabilidad", "probabilidad.orden", "impacto.impacto", "impacto.orden", "respuesta.respuesta", "controles.id", "controles.nombre", "tipoControl.tipo", "tipoEjecucion.tipo"])
            .getMany();

        return query;
    }

    async createRiesgo(crearRiesgoDto: CrearRiesgoDto): Promise<Riesgo> {
        const { nombre, respuestaId, probabilidadId, impactoId, owner, costo } = crearRiesgoDto;

        const respuesta = await this.respuestaRepository.findOne(respuestaId);
        if (!respuesta) {
            throw new NotFoundException(`La respuesta con el id ${respuestaId} no existe`);
        }

        const probabilidad = await this.probabiliadRepository.findOne(probabilidadId);
        if (!probabilidad) {
            throw new NotFoundException(`La probabilidad con el id ${respuestaId} no existe`);
        }

        const impacto = await this.impactoRepository.findOne(impactoId);
        if (!probabilidad) {
            throw new NotFoundException(`El impacto con el id ${respuestaId} no existe`);
        }

        return await this.riesgoRepository.createRiesgo(nombre, respuesta, probabilidad, impacto, owner, costo);
    }

    async agregarControles(controles: { riesgoId: number, controlesId: number[] }): Promise<Riesgo> {
        const { riesgoId, controlesId } = controles;

        const riesgo = await this.riesgoRepository.findOne(riesgoId);
        if (!riesgo) {
            throw new NotFoundException(`No existe el riesgo con el id ${riesgoId}`);
        }

        const controlesNuevos: Control[] = [];
        for (let controlId of controlesId) {
            const control = await this.controlRepository.findOne(controlId);
            if (!control) {
                throw new NotFoundException(`No existe el control con el id ${riesgoId}`);
            }

            controlesNuevos.push(control);
        }

        riesgo.controles = controlesNuevos;

        await this.riesgoRepository.save(riesgo);
        return riesgo;
    }
}