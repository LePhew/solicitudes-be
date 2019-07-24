import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { NivelEntity } from "../nivel/nivel.entity";
import { InstitucionEntity } from "../institucion/institucion.entity";
import { SolicitudEntity } from "../solicitud/solicitud.entity";

@Entity('documento')
export class DocumentoEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 255})
    nombre: string;

    @Column({length: 255})
    descripcion: string;

    @ManyToMany(type => SolicitudEntity)
    @JoinTable({name: "solicitud_documentos"})
    solicitudes: SolicitudEntity[];

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
    creado: Date;
}