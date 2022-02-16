import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Riesgo } from "../riesgo/riesgo.entity";

@Entity()
export class Respuesta {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    respuesta: string

    @OneToMany(() => Riesgo, riesgo => riesgo.respuesta)
    riesgos: Riesgo[]
}