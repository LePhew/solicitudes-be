import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SolicitudDTO } from './solicitud.dto';
import { SolicitudEntity } from './solicitud.entity';

@Injectable()
export class SolicitudService {

    constructor(@InjectRepository(SolicitudEntity) private solicitudRepository: Repository<SolicitudEntity>){}


    async getSolicitudes(){
        return await this.solicitudRepository.find();
    }

    async getSolicitud(solicitudId: string){
        return await this.solicitudRepository.findOne({where: {id: solicitudId}})
    }

    async crearSolicitud(data: any){
        const solicitud = this.solicitudRepository.create(data);
        await this.solicitudRepository.save(solicitud);
        return solicitud;
    }
    
    async actualizarSolicitud(id: string, data: any){
        return await this.solicitudRepository.update(id, data);
    }
    
    async borrarSolicitud(id: string){
        await this.solicitudRepository.delete(id);
        return {solicitudDeleted: true};
    }

    async filtrarSolicitudes(properties: any){
        return await this.solicitudRepository.find({where: properties});
    }

}
