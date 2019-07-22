import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";
import { SolicitudEntity} from "../solicitud/solicitud.entity"
import { NivelEntity } from "../nivel/nivel.entity"; 

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
    @JoinColumn({name: "nivelId"})
    nivel: NivelEntity;

    @Column()
    nivelId: string;

    @Column()
    estado: string;

    @BeforeInsert()
    generarMatricula(){
        let year: Date;
        year.getFullYear().toString();
        let number: number = Math.floor((Math.random()*1000000)+1);
        this.matricula = `${year}-${number}`;
    }

}
