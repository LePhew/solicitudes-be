import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NivelEntity } from './nivel.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NivelService {

    constructor(
        @InjectRepository(NivelEntity) private nivelRepository: Repository<NivelEntity>
    ) { }


    async crearNivel(data: any) {
        const nivel = this.nivelRepository.create(data);
        await this.nivelRepository.save(nivel);
        return nivel;
    }
    async getAll() {
        return await this.nivelRepository.find({ order: { orden: "ASC" } });
    }

    async getNivel(nivelId: string) {
        const nivel = await this.nivelRepository.findOne({ where: { id: nivelId } });
        return nivel;
    }

    async actualizarNivel(nivelId: string, data: any) {
        await this.nivelRepository.update(nivelId, data);
        const nivel = await this.nivelRepository.findOne({ where: { id: nivelId } });
        return nivel;
    }

    async borrarNivel(nivelId: string) {
        await this.nivelRepository.delete(nivelId);
        return { nivelDeleted: true };
    }

}
