import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, BeforeInsert, JoinTable, ManyToMany } from "typeorm";
import { DocumentoEntity } from "../documento/documento.entity";
import { EstudianteEntity } from "../estudiante/estudiante.entity";
import { Estados } from "../Enum";

@Entity('solicitud')
export class SolicitudEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    solicitudCode: string;

    @ManyToOne(() => EstudianteEntity, {eager: true})
    @JoinColumn({name: "estudianteId"})
    estudiante: EstudianteEntity;

    @Column()
    estudianteId: string;

    @ManyToMany(() => DocumentoEntity, {eager: true})
    @JoinTable({name: "solicitud_documentos"})
    documentos: DocumentoEntity[];

    @CreateDateColumn()
    creada: Date;

    @UpdateDateColumn()
    modificada: Date;

    @Column()
    estado: Estados;

    @BeforeInsert()
    assignEstado(){
        this.estado = Estados.Activo;
        
        let number = Math.floor((Math.random()*1000)+1);
        let code = "sol-"+number;

        this.solicitudCode = code;
    }  
}
