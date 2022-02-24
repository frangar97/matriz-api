import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Control } from "../control/control.entity";
import { Impacto } from "../impacto/impacto.entity";
import { Probabilidad } from "../probabilidad/probabilidad.entity";
import { Respuesta } from "../respuesta/respuesta.entity";

@Entity()
export class Riesgo {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nombre: string

    @ManyToOne(() => Impacto, impacto => impacto.riesgos)
    impacto: Impacto;

    @ManyToOne(() => Probabilidad, probabilidad => probabilidad.riesgos)
    probabilidad: Probabilidad;

    @ManyToOne(() => Respuesta, respuesta => respuesta.riesgos)
    respuesta: Respuesta;

    @ManyToMany(() => Control, control => control.riesgo)
    @JoinTable()
    controles: Control[];
}