import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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
    ) { }

    async getAll(): Promise<Riesgo[]> {
        const query = await this.riesgoRepository.createQueryBuilder("riesgo")
            .innerJoinAndSelect("riesgo.probabilidad", "probabilidad")
            .innerJoinAndSelect("riesgo.impacto", "impacto")
            .innerJoinAndSelect("riesgo.respuesta", "respuesta")
            .select(["riesgo.id","riesgo.nombre", "probabilidad.probabilidad", "probabilidad.orden", "impacto.impacto", "impacto.orden", "respuesta.respuesta"])
            .getMany();

        return query;
    }

    async createRiesgo(crearRiesgoDto: CrearRiesgoDto): Promise<Riesgo> {
        const { nombre, respuestaId, probabilidadId, impactoId } = crearRiesgoDto;

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

        return await this.riesgoRepository.createRiesgo(nombre, respuesta, probabilidad, impacto);
    }
}