import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EstudianteModule } from './estudiante/estudiante.module';
import { SolicitudModule } from './solicitud/solicitud.module';
import { DocumentoModule } from './documento/documento.module';
import { InstitucionModule } from './institucion/institucion.module';
import { NivelModule } from './nivel/nivel.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { EventsModule } from './events/events.module';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [EstudianteModule, SolicitudModule, DocumentoModule, InstitucionModule, NivelModule, NotificacionesModule, TypeOrmModule.forRoot({
    name: "default",
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "apps",
    password: "urn0td3c3nt",
    database: "solicitudes_db",
    synchronize: true,
    entities: ["dist/**/*.entity.js"]
  }), EventsModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule { }
