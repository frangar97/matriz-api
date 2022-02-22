import { EntityRepository, Repository } from "typeorm";
import { TipoEjecucion } from "./tipo-ejecucion.entity";

@EntityRepository(TipoEjecucion)
export class TipoEjecucionRepository extends Repository<TipoEjecucion>{

}