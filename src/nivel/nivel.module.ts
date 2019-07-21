import { Module } from '@nestjs/common';
import { NivelController } from './nivel.controller';
import { NivelService } from './nivel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NivelEntity } from '../nivel/nivel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NivelEntity])],
  controllers: [NivelController],
  providers: [NivelService]
})
export class NivelModule {}