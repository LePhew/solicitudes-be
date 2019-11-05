import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';
import { NotificacionDTO } from './notificacion.dto';

@Controller('notificaciones')
export class NotificacionesController {

    constructor(
        private notificacionesService: NotificacionesService
    ){}


    @Get()
    getNotificaciones(){
        return this.notificacionesService.getNotificaciones();
    }

    @Post()
    insertarNotificacion(@Body() data: NotificacionDTO){
        return this.notificacionesService.insertarNotificacion(data);
    }
}
