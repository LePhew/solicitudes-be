import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BeforeInsert, JoinTable, ManyToMany } from "typeorm";
import { DocumentoEntity } from "../documento/documento.entity";
import { EstudianteEntity } from "../estudiante/estudiante.entity";

@Entity('solicitud')
export class SolicitudEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => EstudianteEntity)
    @JoinColumn({name: "estudianteId"})
    estudiante: EstudianteEntity;

    @Column()
    estudianteId: string;

    @ManyToMany(type => DocumentoEntity)
    @JoinTable({name: "solicitud_documentos"})
    documentos: DocumentoEntity[];

    @Column()
    documentoId:string;

    @CreateDateColumn()
    creada: Date;

    @UpdateDateColumn()
    modificada: Date;

    @Column()
    estado: string;

    @BeforeInsert()
    assignEstado(){
        this.estado = "Activa";
    }
    
}
