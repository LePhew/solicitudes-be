import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('notificaciones')
export class NotificacionesEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    tipo: string;

    @CreateDateColumn()
    creada: Date;

    @Column()
    solicitudId: string;

    @Column({nullable: true})
    mensaje: string;

    @Column({
        default: 0
    })
    vista: number;
}