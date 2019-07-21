import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NivelEntity } from './nivel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NivelService {

    constructor(@InjectRepository(NivelEntity) private nivelRepository: Repository<NivelEntity>){}


    async crearNivel(data: any){
        const nivel = this.nivelRepository.create(data);
        await this.nivelRepository.save(nivel);
        return nivel;
    }
    async getAll(){
        return await this.nivelRepository.find();
    }
    
    async getNivel(nivelId: string){
        const institucion = await this.nivelRepository.findOne({where: {id : nivelId}});
        return institucion;
    }

    async actualizarNivel(nivelId: string, data: any){
        await this.nivelRepository.update(nivelId, data);
        const institucion = await this.nivelRepository.findOne({where: {id: nivelId}});
        return institucion;
    }

    async borrarNivel(institucionId: string){
        await this.nivelRepository.delete(institucionId);
        return {institucionDeleted: true};
    }

}
