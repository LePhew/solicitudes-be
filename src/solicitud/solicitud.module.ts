import { Module } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { SolicitudController } from './solicitud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudEntity } from './solicitud.entity';
import { NotificacionesService } from '../notificaciones/notificaciones.service';
import { NotificacionesEntity } from '../notificaciones/notificaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudEntity, NotificacionesEntity])],
  providers: [SolicitudService, NotificacionesService],
  controllers: [SolicitudController]
})
export class SolicitudModule {}
