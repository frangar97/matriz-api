import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoControl } from "../tipo-control/tipo-control.entity";
import { TipoEjecucion } from "../tipo-ejecucion/tipo-ejecucion.entity";


@Entity()
export class Control {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nombre: string

    @ManyToOne(() => TipoControl, tipoControl => tipoControl.controles)
    tipoControl: TipoControl;

    @ManyToOne(() => TipoEjecucion, tipoEjecucion => tipoEjecucion.controles)
    tipoEjecucion: TipoEjecucion;
}