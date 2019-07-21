import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('nivel')
export class NivelEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({type: "int"})
    orden: number;

}