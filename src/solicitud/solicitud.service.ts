import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SolicitudEntity } from './solicitud.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolicitudService {

    constructor(@InjectRepository(SolicitudEntity) private solicitudRepository: Repository<SolicitudEntity>){}


    async crearSolicitud(){}

    async borrarSolicitud(){}

    async actualizarSolicitud(){}



}
