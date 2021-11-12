import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/evento';
import { EventoService } from 'src/app/services/evento.service';


@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  eventoForm: FormGroup;
  titulo = 'Crear evento';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _eventoService: EventoService,
              private aRouter: ActivatedRoute) { 
    this.eventoForm = this.fb.group({
      localizacion: ['', Validators.required],
      fecha: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {

    this.esEditar();

  }

  agregarEvento() {

    const EVENTO: Evento = {
      localizacion: this.eventoForm.get('localizacion')?.value,
      fecha: this.eventoForm.get('fecha')?.value,
      latitud: this.eventoForm.get('latitud')?.value,
      longitud: this.eventoForm.get('longitud')?.value,
      descripcion: this.eventoForm.get('descripcion')?.value,
    }

    console.log(EVENTO);
    this._eventoService.guardarEvento(EVENTO).subscribe(data => {
      this.toastr.success('El evento fue registrado con exito!', 'Evento Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.eventoForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar evento';
      this._eventoService.obtenerEvento(this.id).subscribe(data => {
        this.eventoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        })
      })
    }
  }


}
