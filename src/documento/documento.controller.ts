import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { DocumentoDTO } from './documento.dto';

@Controller('documento')
export class DocumentoController {

    constructor(private documentoService: DocumentoService){}

    @Get()
    getDocumentos(){
        return this.documentoService.getAll();
    }

    @Post()
    crearDocumento(@Body() data: DocumentoDTO){
        return this.documentoService.crearDocumento(data);
    }

    @Put(':id')
    actualizarDocumento(@Param() documentoId: string, @Body() data: Partial<DocumentoDTO>){
        
        return this.documentoService.actualizarDocumento(documentoId, data);

    }


}
