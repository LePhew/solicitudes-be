import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DocumentoEntity } from './documento.entity';
import { DocumentoDTO } from '../documento/documento.dto';


@Injectable()
export class DocumentoService {

    constructor(
        @InjectRepository(DocumentoEntity) private documentoRepository: Repository<DocumentoEntity>
        ){}


    

    async getAll () {
        return await this.documentoRepository.find({relations: ['institucion', 'nivel']});
    }

    async getDocumento(documentoId: string){
        const documento =  await this.documentoRepository.findOne({where: {id: documentoId}, relations: ['institucion', 'nivel']});
        return documento;
    }
    
    async getDocumentosByNivelAndInstitucion(institucionId: string, nivelId: string){
       const documentos = await this.documentoRepository.find({where: {institucionId: institucionId, nivelId: nivelId}});
       return documentos;
    }

    async crearDocumento(data: DocumentoDTO){

        const documento = this.documentoRepository.create(data);
        await this.documentoRepository.save(documento);
        return documento;

    }

    async actualizarDocumento(documentoId: string, data: any){

        await this.documentoRepository.update(documentoId, data);
        const documento = this.documentoRepository.findOne({where: {id: documentoId}});
        return documento;
    }

    async borrarDocumento(documentoId: string){
        await this.documentoRepository.delete(documentoId);
        return {documentoBorrado: true};

    }



}
