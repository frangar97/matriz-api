import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Riesgo } from "../riesgo/riesgo.entity";

@Entity()
export class Probabilidad {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    probabilidad: string

    @Column()
    orden: number

    @OneToMany(() => Riesgo, riesgo => riesgo.probabilidad)
    riesgos: Riesgo[]
}