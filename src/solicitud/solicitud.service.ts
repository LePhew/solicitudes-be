import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { SolicitudEntity } from './solicitud.entity';
import { NotificacionesEntity } from '../notificaciones/notificaciones.entity';

@Injectable()
export class SolicitudService {


    constructor(
    @InjectRepository(NotificacionesEntity) private notificacionesRepository: Repository<NotificacionesEntity>, 
    @InjectRepository(SolicitudEntity) private solicitudRepository: Repository<SolicitudEntity>){}


    async getSolicitudes(){
        return await this.solicitudRepository.find();
    }

    async getSolicitud(solicitudId: string){
        return await this.solicitudRepository.findOne({where: {id: solicitudId}})
    }

    async crearSolicitud(data: any){
        const solicitud = this.solicitudRepository.create(data);
        await this.solicitudRepository.save(solicitud);

        const notificacion = this.notificacionesRepository.create();
        notificacion.tipo = "Creada";
        notificacion.solicitudId = solicitud['id'];
        notificacion.mensaje = `La solicitud ${solicitud['solicitudCode']} no ha sido antendida`;
        this.notificacionesRepository.save(notificacion);

        return solicitud;
    }
    
    async actualizarSolicitud(id: string, data: any){
        await this.solicitudRepository.update(id, data);
        const notificacion = this.notificacionesRepository.create();
        notificacion.tipo = "Actualizada";
        notificacion.solicitudId = id;
        notificacion.mensaje = `La solicitud ${data.solicitudCode} ha sido actualizada`;
    }
    
    async borrarSolicitud(id: string){
        await this.solicitudRepository.delete(id);
        return {solicitudDeleted: true};
    }

    async filtrarSolicitudes(searchCriteria: any){
        return await this.solicitudRepository.find({
            where: 
            {solicitudCode: Like(`%${searchCriteria}%`)}
         });
    }

}
