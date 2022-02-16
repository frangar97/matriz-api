import { EntityRepository, Repository } from "typeorm";
import { Respuesta } from "./respuesta.entity";

@EntityRepository(Respuesta)
export class RespuestaRepository extends Repository<Respuesta>{

}