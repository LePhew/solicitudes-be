import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentoEntity } from './documento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentoService {

    constructor(@InjectRepository(DocumentoEntity) private documentoRepository: Repository<DocumentoEntity>){}


    async crearDocumento(){
        
    }

}
