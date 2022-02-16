import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Respuesta {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    respuesta: string
}