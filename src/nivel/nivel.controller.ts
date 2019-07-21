import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { NivelService } from './nivel.service';

@Controller('nivel')
export class NivelController {

    constructor(private nivelService: NivelService){}


    @Get()
    getNiveles(){
        return this.nivelService.getAll();
    }

    @Get(':id')
    getNivel(@Param('id') id: string){
        return this.nivelService.getNivel(id);
    }

    @Post()
    crearNivel(@Body() data: any){
        return this.nivelService.crearNivel(data);
    }

    @Put(':id')
    actualizarNivel(@Param('id') id: string, @Body() data: any){
        return this.nivelService.actualizarNivel(id, data);
    }

    @Delete(':id')
    borrarNivel(@Param('id') id: string){
        return this.nivelService.borrarNivel(id);
    }

}
