import { Module } from '@nestjs/common';
import { InstitucionController } from './institucion.controller';
import { InstitucionService } from './institucion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitucionEntity } from './institucion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstitucionEntity])],
  controllers: [InstitucionController],
  providers: [InstitucionService]
})
export class InstitucionModule {}
