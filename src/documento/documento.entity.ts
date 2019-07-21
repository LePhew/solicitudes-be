import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { NivelEntity } from "../nivel/nivel.entity";
import { InstitucionEntity } from "../institucion/institucion.entity";

@Entity('documento')
export class DocumentoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 255})
    nombre: string;

    @Column({length: 255})
    descripcion: string;

    @ManyToOne(type => NivelEntity, {nullable: true})
    @JoinColumn({name: "nivelId"})
    nivel: NivelEntity;

    @Column()
    nivelId: string;

    @ManyToOne(type => InstitucionEntity, {nullable: true})
    @JoinColumn({name: "institucionId"})
    institucion: InstitucionEntity;

    @Column()
    institucionId:string;

    @CreateDateColumn()
    creado: string;
}