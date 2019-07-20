import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DocumentoEntity } from './documento.entity';
import { DocumentoDTO } from '../documento/documento.dto';
@Injectable()
export class DocumentoService {

    constructor(@InjectRepository(DocumentoEntity) private documentoRepository: Repository<DocumentoEntity>){}


    async crearDocumento(data: DocumentoDTO){
        const documento = this.documentoRepository.create(data);
        await this.documentoRepository.save(documento);
        return documento;
    }

    async getAll () {
        return await this.documentoRepository.find({relations: ['institucion', 'nivel']});
    }



}
