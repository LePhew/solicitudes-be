import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('nivel')
export class NivelEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    decripcion: string;

    @Column({type: "int"})
    orden: number;

}