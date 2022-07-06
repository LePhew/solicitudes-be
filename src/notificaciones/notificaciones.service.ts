import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { NotificacionesEntity } from './notificaciones.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NotificacionesService {

    constructor(
        @InjectRepository(NotificacionesEntity) private notificacionesRepository: Repository<NotificacionesEntity>
    ) { }



    async getNotificaciones() {
        return await this.notificacionesRepository.find({ where: { vista: 0 } });
    }

    async enviarNotificacionesEmail() { }

    async insertarNotificacion(data: any) {
        const notificacion = this.notificacionesRepository.create(data);
        await this.notificacionesRepository.save(notificacion);
        return notificacion;
    }

    async marcarVistas() {
        const notificaciones = await this.notificacionesRepository.find({ where: { vista: 0 } });
        notificaciones.forEach((item) => {
            item['vista'] = 1;
            this.notificacionesRepository.update(item['id'], item);
        })
    }
}
