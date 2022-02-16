import { EntityRepository, Repository } from "typeorm";
import { Probabilidad } from "./probabilidad.entity";

@EntityRepository(Probabilidad)
export class ProbabilidadRepository extends Repository<Probabilidad>{

    async getAll(): Promise<Probabilidad[]> {
        const query = this.createQueryBuilder("probabilidad");
        return query.orderBy("probabilidad.orden", "ASC").getMany();
    }

}