import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DocumentoService } from './documento.service';
import { DocumentoDTO } from './documento.dto';

@Controller('documento')
export class DocumentoController {

    constructor(private documentoService: DocumentoService){}

    @Get()
    getDocumentos(){
        return this.documentoService.getAll();
    }

    @Get(':id')
    getDocumento(@Param('id') id: string){
        return this.documentoService.getDocumento(id);
    }

    @Post()
    crearDocumento(@Body() data: DocumentoDTO){
        return this.documentoService.crearDocumento(data);
    }

    @Put(':id')
    actualizarDocumento(@Param('id') documentoId: string, @Body() data: Partial<DocumentoDTO>){
        
        return this.documentoService.actualizarDocumento(documentoId, data);

    }
    @Delete(':id')
    borrarDocumento(@Param('id') id: string){
        return this.documentoService.borrarDocumento(id);    
    }


}
