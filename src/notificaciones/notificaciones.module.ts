import { Module } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionesController } from './notificaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificacionesEntity } from './notificaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotificacionesEntity])],
  providers: [NotificacionesService],
  controllers: [NotificacionesController]
})
export class NotificacionesModule {}
