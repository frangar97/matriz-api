import { EntityRepository, Repository } from "typeorm";
import { Riesgo } from "./riesgo.entity";

@EntityRepository(Riesgo)
export class RiesgoRepository extends Repository<Riesgo>{

}