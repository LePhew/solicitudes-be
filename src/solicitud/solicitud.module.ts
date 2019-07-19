import { Module } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { SolicitudController } from './solicitud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudEntity } from './solicitud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudEntity])],
  providers: [SolicitudService],
  controllers: [SolicitudController]
})
export class SolicitudModule {}
