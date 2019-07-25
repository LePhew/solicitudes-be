import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitudEntity } from './solicitud.entity';
import { Repository } from 'typeorm';
import { SolicitudDTO } from './solicitud.dto';

@Injectable()
export class SolicitudService {

    constructor(@InjectRepository(SolicitudEntity) private solicitudRepository: Repository<SolicitudEntity>){}


    async getSolicitudes(){
        return await this.solicitudRepository.find({relations: ['estudiante', 'documentos']});
    }

    async getSolicitud(solicitudId: string){
        return await this.solicitudRepository.findOne({
            where: { solicitudId },
            relations: ['estudiante', 'documentos']});
    }

    async crearSolicitud(data: any){
        const solicitud = this.solicitudRepository.create(data);
        await this.solicitudRepository.save(solicitud);
        return solicitud;
    }
    
    async actualizarSolicitud(id: string, data: Partial<SolicitudDTO>){
        return await this.solicitudRepository.update(id, data);
    }
    
    async borrarSolicitud(id: string){
        await this.solicitudRepository.delete(id);
        return {solicitudDeleted: true};
    }





}
