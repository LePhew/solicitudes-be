import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('institucion')
export class InstitucionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({ unique: true, length: 15, nullable: true })
    institucionUsuario: string;

    @Column({ nullable: true })
    institucionPwd: string;

}