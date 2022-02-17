import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Impacto } from "../impacto/impacto.entity";
import { Probabilidad } from "../probabilidad/probabilidad.entity";
import { Respuesta } from "../respuesta/respuesta.entity";
import { Riesgo } from "./riesgo.entity";

@EntityRepository(Riesgo)
export class RiesgoRepository extends Repository<Riesgo>{
    async createRiesgo(nombre: string, respuesta: Respuesta, probabilidad: Probabilidad, impacto: Impacto): Promise<Riesgo> {
        try {
            const riesgo = this.create({ nombre, respuesta, probabilidad, impacto });
            await this.save(riesgo);
            return riesgo;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}