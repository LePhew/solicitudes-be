import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('institucion')
export class InstitucionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}