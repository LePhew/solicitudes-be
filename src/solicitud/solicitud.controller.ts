import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { SolicitudService } from './solicitud.service';
import { SolicitudDTO } from './solicitud.dto';
import { SolicitudEntity } from './solicitud.entity';

@Controller('solicitud')
export class SolicitudController {

    constructor(private solicitudService: SolicitudService){}

    @Get()
    getSolicitudes(){
        return this.solicitudService.getSolicitudes();
    }

    @Get(':id')
    getSolicitud(@Param('id') id: string){
        return this.solicitudService.getSolicitud(id);
    }

    @Post()
    crearSolicitud(@Body() data: SolicitudDTO){
        return this.solicitudService.crearSolicitud(data);
    }

    @Put(':id')
    actualizarSolicitud(@Param('id') id: string, @Body() data: Partial<SolicitudEntity>){
        return this.solicitudService.actualizarSolicitud(id, data);
    }

    @Delete(':id')
    borrarSolicitud(@Param('id') id: string){
        return this.solicitudService.borrarSolicitud(id);
    }

}
