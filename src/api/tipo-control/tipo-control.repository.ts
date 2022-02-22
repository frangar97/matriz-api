import { EntityRepository, Repository } from "typeorm";
import { TipoControl } from "./tipo-control.entity";

@EntityRepository(TipoControl)
export class TipoControlRepository extends Repository<TipoControl>{

}