import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Impacto {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    impacto: string

    @Column()
    orden: number
}