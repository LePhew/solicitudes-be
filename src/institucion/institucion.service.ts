import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitucionEntity } from './institucion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitucionService {

    constructor(@InjectRepository(InstitucionEntity) private institucionRepository: Repository<InstitucionEntity>){}


    async getAll(){
        return await this.institucionRepository.find();
    }
    
    async getInstitucion(institucionId: string){
        const institucion = await this.institucionRepository.findOne({where: {id : institucionId}});
        return institucion;
    }

    async crearInstitucion(data: any){
        const institucion = this.institucionRepository.create(data);
        await this.institucionRepository.save(data);
        return institucion;
    }

    async actualizarInstitucion(institucionId: string, data: any){
        await this.institucionRepository.update(institucionId, data);
        const institucion = await this.institucionRepository.findOne({where: {id: institucionId}});
        return institucion;
    }

    async borrarInstitucion(institucionId: string){
        await this.institucionRepository.delete(institucionId);
        return {institucionDeleted: true};
    }


}
