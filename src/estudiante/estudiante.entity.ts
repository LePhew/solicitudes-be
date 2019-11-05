import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";
import { SolicitudEntity} from "../solicitud/solicitud.entity"
import { NivelEntity } from "../nivel/nivel.entity"; 
import { InstitucionEntity } from "../institucion/institucion.entity";

@Entity('estudiante')
export class EstudianteEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 20})
    nombres: string;

    @Column({length: 20})
    apellidos: string;

    @Column({nullable: true})
    cedula?: string;

    @Column({nullable: true})
    contrasena?: string;

    @Column()
    matricula: string;
    
    @OneToMany(() => SolicitudEntity, solicitud => solicitud.estudiante)
    @JoinColumn()
    solicitudes: SolicitudEntity[];

    @CreateDateColumn()
    creado: Date;
    
    @ManyToOne(() => NivelEntity)
    @JoinColumn({name: "nivelId"})
    nivel: NivelEntity;

    @Column()
    nivelId: string;

    @ManyToOne(() => InstitucionEntity)
    @JoinColumn({name: "institucionId"})
    institucion: InstitucionEntity;

    @Column()
    institucionId: string;

    @Column()
    estado: string;

    @BeforeInsert()
    generarMatricula(){
        let year = new Date().getFullYear().toString();
        let number = Math.floor((Math.random()*10000)+1);
        let matricula = `${year}-${number}`;
        this.matricula = matricula;
    }

    @BeforeInsert()
    assingEstado(){
        this.estado = "Activo";
    }
}
