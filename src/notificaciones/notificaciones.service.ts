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

    }

    async enviarNotificaciones(){

    }

    async insertarNotificacion(){

    }
}
