import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NotificacionesEntity } from './notificaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotificacionesService {

    constructor(
        @InjectRepository(NotificacionesEntity) private notificacionesEntity: Repository<NotificacionesEntity>
        ){}


    
    async getNotificaciones(){
        return await this.notificacionesEntity.find();
    }

    async enviarNotificacionesEmail(){
        
    }

    async insertarNotificacion(data: any){
        const notificacion = this.notificacionesEntity.create(data);
        await this.notificacionesEntity.save(notificacion);
        return notificacion;
    }
}
