import { DocumentoEntity } from "../documento/documento.entity";

export interface SolicitudDTO {

    estudianteId: string;
    documentos: DocumentoEntity[];

}