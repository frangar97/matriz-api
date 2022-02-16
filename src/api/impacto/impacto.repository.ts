import { EntityRepository, Repository } from "typeorm";
import { Impacto } from "./impacto.entity";

@EntityRepository(Impacto)
export class ImpactoRepository extends Repository<Impacto>{

    async getAll(): Promise<Impacto[]> {
        const query = this.createQueryBuilder("impacto");
        return query.orderBy("impacto.orden", "ASC").getMany();
    }

}