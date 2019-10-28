import { Controller, Get } from '@nestjs/common';
import { NotificacionesService } from './notificaciones.service';

@Controller('notificaciones')
export class NotificacionesController {

    constructor(
        private notificacionesService: NotificacionesService
    ){}


    @Get()
    getNotificaciones(){
        return this.notificacionesService.getNotificaciones();
    }
}
