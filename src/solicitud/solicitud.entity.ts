import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, ManyToOne } from "typeorm";
import { DocumentoEntity } from "../documento/documento.entity";
import { EstudianteEntity } from "../estudiante/estudiante.entity";

@Entity('solicitud')
export class SolicitudEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => EstudianteEntity, estudiante => estudiante.solicitudes)
    estudiante: EstudianteEntity;

    @CreateDateColumn()
    creada: Date;

    @UpdateDateColumn()
    modificada: Date;

    @ManyToMany(type => DocumentoEntity)
    @JoinTable({name: "solicitud_documentos"})
    documentos?: DocumentoEntity[];

    @Column()
    estado: string;
    
}
