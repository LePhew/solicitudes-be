import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne } from "typeorm";
import { SolicitudEntity} from "../solicitud/solicitud.entity"
import { NivelEntity } from "../nivel.entity"; 

@Entity('estudiante')
export class EstudianteEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 20})
    nombres: string;

    @Column({length: 20})
    apellidos: string;

    @Column()
    matricula: string;
    
    @OneToMany(type => SolicitudEntity, solicitud => solicitud.estudiante)
    solicitudes: SolicitudEntity[];

    @CreateDateColumn()
    creado: Date;
    
    @ManyToOne(type => NivelEntity)
    nivel: NivelEntity;

    @Column()
    estado: string;

}
