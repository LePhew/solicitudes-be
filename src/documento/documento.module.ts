import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DocumentoService } from './documento.service';
import { DocumentoController } from './documento.controller';
import { DocumentoEntity } from './documento.entity';


@Module({
  imports: [TypeOrmModule.forFeature([DocumentoEntity])],
  providers: [DocumentoService],
  controllers: [DocumentoController]
})
export class DocumentoModule {}
