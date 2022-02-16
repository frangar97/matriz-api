import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Probabilidad {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    probabilidad: string

    @Column()
    orden: number
}