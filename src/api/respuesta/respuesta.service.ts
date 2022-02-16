import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Respuesta } from "./respuesta.entity";
import { RespuestaRepository } from "./respuesta.repository";

@Injectable()
export class RespuestaService {
    constructor(@InjectRepository(RespuestaRepository) private respuestaRepository: RespuestaRepository) { }

    async getAll(): Promise<Respuesta[]> {
        return this.respuestaRepository.find();
    }
}