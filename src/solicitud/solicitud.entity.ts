import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { DocumentoEntity } from "../documento/documento.entity";
import { EstudianteEntity } from "../estudiante/estudiante.entity";

@Entity('solicitud')
export class SolicitudEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => EstudianteEntity, estudiante => estudiante.solicitudes)
    @JoinColumn({name: "estudianteId"})
    estudiante: EstudianteEntity;

    @Column()
    estudianteId: string;

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
