import { InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { TipoControl } from "../tipo-control/tipo-control.entity";
import { TipoEjecucion } from "../tipo-ejecucion/tipo-ejecucion.entity";
import { Control } from "./control.entity";


@EntityRepository(Control)
export class ControlRepository extends Repository<Control>{
    async createControl(nombre: string, tipoEjecucion: TipoEjecucion, tipoControl: TipoControl): Promise<Control> {
        try {
            const control = this.create({ nombre, tipoControl, tipoEjecucion });
            await this.save(control);
            return control;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}