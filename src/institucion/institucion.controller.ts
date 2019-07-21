import { Controller, Post, Body, Get } from '@nestjs/common';
import { InstitucionService } from './institucion.service';

@Controller('institucion')
export class InstitucionController {

    constructor(private institucionService : InstitucionService){}


    @Get()
    getAll(){
        return this.institucionService.getAll();
    }

    @Post()
    crearInstitucion(@Body() data: any){
        return this.institucionService.crearInstitucion(data);
    }

}
