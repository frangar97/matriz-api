import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RiesgoRepository } from "./riesgo.repository";

@Injectable()
export class RiesgoService {
    constructor(@InjectRepository(RiesgoRepository) private riesgoRepository: RiesgoRepository) { }

}