import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Control } from "../control/control.entity";

@Entity()
export class TipoEjecucion {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    tipo: string

    @OneToMany(() => Control, control => control.tipoEjecucion)
    controles: Control[]
}