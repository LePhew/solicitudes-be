import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteDTO } from './estudiante.dto';

@Controller('estudiante')
export class EstudianteController {

    constructor(private estudianteService: EstudianteService){}

    @Get()
    getEstudiantes(){
        return this.estudianteService.getEstudiantes();
    }
    
    @Get(':id')
    getEstudiante(@Param('id') id: string){
        return this.estudianteService.getEstudiante(id);
    }
    
    @Get('bymat/:mat')
    getEstudianteByMatricula(@Param('mat') matricula: string){
        return this.estudianteService.getEstudianteByMat(matricula);
    }
    
    @Get('byced/:ced')
    getEstudianteByCedula(@Param('ced') cedula: string ){
        return this.estudianteService.getEstudianteByCed(cedula);
    }
    
    @Post()
    crearEstudiante(@Body() data: EstudianteDTO){
        return this.estudianteService.crearEstudiante(data);
    }

    @Put(':id')
    actualizarEstudiante(@Param('id') id: string, @Body() data: any){
        return this.estudianteService.actualizarEstudiante(id, data);
    }

    @Delete(':id')
    borrarEstudiante(@Param('id') id: string){
        return this.estudianteService.borrarEstudiante(id);
    }



}
