import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Riesgo } from "../riesgo/riesgo.entity";

@Entity()
export class Impacto {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    impacto: string

    @Column()
    orden: number

    @OneToMany(() => Riesgo, riesgo => riesgo.impacto)
    riesgos: Riesgo[]
}