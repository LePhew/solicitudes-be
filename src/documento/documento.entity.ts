import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { NivelEntity } from "../nivel.entity";
import { InstitucionEntity } from "../institucion.entity";

@Entity('documento')
export class DocumentoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 20})
    nombre: string;

    @Column({length: 255})
    descripcion: string;

    @ManyToOne(type => NivelEntity)
    nivel: NivelEntity;

    @ManyToOne(type => InstitucionEntity, {nullable: true})
    institucion: InstitucionEntity;

    @CreateDateColumn()
    creado: string;
}