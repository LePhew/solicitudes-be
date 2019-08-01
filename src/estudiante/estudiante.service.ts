import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {

    constructor(@InjectRepository(EstudianteEntity) private estudianteRepository: Repository<EstudianteEntity>){}

    async getEstudiantes(){
        return await this.estudianteRepository.find({relations: ['solicitudes', 'nivel', 'institucion']});
    }

    async getEstudiante(id: string){
        return await this.estudianteRepository.findOne({where: {id}, relations: ['solicitudes', 'nivel', 'institucion']});
    }

    async crearEstudiante(data: any){
        const estudiante = this.estudianteRepository.create(data);
        await this.estudianteRepository.save(estudiante);
        return estudiante;
    }

    async actualizarEstudiante(id: string, data: any){
        return await this.estudianteRepository.update(id, data);
    }
    
    async borrarEstudiante(id: string){
        await this.estudianteRepository.delete(id);
        return {estudianteDeleted: true};
    }

    async getEstudianteByMat(matricula: string){
        return await this.estudianteRepository.findOne({where: {matricula: matricula}, relations: ['solicitudes', 'nivel', 'institucion']});
    }
}

