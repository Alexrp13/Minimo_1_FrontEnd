import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.css']
})
export class ListarEventosComponent implements OnInit {
  listEventos: Evento[] = [];
  
  constructor(private _eventoService: EventoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEventos();
  }


  obtenerEventos() {
    this._eventoService.getEventos().subscribe(data => {
      console.log(data);
      this.listEventos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarEvento(id: any) {
    this._eventoService.eliminarEvento(id).subscribe(data => {
      this.toastr.error('El evento fue eliminado con exito' ,'Evento Eliminado');
      this.obtenerEventos();
    }, error => {
      console.log(error);
    })
  }


}
