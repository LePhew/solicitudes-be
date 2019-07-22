import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { InstitucionService } from './institucion.service';

@Controller('institucion')
export class InstitucionController {

    constructor(private institucionService : InstitucionService){}


    @Get()
    getAll(){
        return this.institucionService.getAll();
    }

    @Get(':id')
    getInstitucion(@Param('id') id: string){
        return this.institucionService.getInstitucion(id);
    }

    @Post()
    crearInstitucion(@Body() data: any){
        return this.institucionService.crearInstitucion(data);
    }

    @Put(':id')
    actualizarInstitucion(@Param('id') id: string, @Body() data: any){
        return this.institucionService.actualizarInstitucion(id, data);
    }

    @Delete(':id')
    borrarInstitucion(@Param('id') id: string){
        return this.institucionService.borrarInstitucion(id);
    }

    

}
