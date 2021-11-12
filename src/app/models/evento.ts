import { Persona } from "./persona";

export class Evento {
    _id?: number;
    localizacion: string;
    fecha: string;
    latitud: number;
    longitud: number;
    descripcion: string;
    

    constructor(localizacion: string, fecha: string, latitud: number, longitud: number, descripcion: string ){
        this.localizacion = localizacion;
        this.fecha = fecha;
        this.latitud = latitud;
        this.longitud = longitud;
        this.descripcion = descripcion;
    }
}