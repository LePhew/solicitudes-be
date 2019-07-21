import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


import { EstudianteModule } from './estudiante/estudiante.module';
import { SolicitudModule } from './solicitud/solicitud.module';
import { DocumentoModule } from './documento/documento.module';
import { InstitucionModule } from './institucion/institucion.module';
import { NivelModule } from './nivel/nivel.module';



@Module({
  imports: [TypeOrmModule.forRoot(),EstudianteModule, SolicitudModule, DocumentoModule, InstitucionModule, NivelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
