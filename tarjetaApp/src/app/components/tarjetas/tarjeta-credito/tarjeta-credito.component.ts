import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from '../../../services/tarjeta.service';
import {
  faCoffee, faUser
  , faCreditCard, faCalendar, faKey, faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { TarjetaCredito } from 'src/app/interfaces/tarjeta.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  faCoffee = faCoffee;
  faUser = faUser;
  faCreditCard = faCreditCard;
  faCalendar = faCalendar;
  faKey = faKey;
  faDatabase = faDatabase;


  tarjeta: TarjetaCredito | undefined;
  idTarjeta: number = 0;


  form: FormGroup = this.fb.group({
    id: [0],
    titular: ['', [Validators.required]],
    numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
    cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],

  })



  constructor(
    private fb: FormBuilder,
    private tarjetaService: TarjetaService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjeta().subscribe(data => {
      console.log(data);
      this.tarjeta = data;
      this.idTarjeta = data.id || 0;
      this.form.reset(this.tarjeta);
    })
  }

  guardarTarjeta() {
    console.log(this.form.value);


    if (this.idTarjeta === 0) {
      this.agregar()
    }
    else {
      this.editar();
    }



  }

  agregar() {
    const tarjeta: TarjetaCredito = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    this.tarjetaService.guardarTarjeta(tarjeta).subscribe(resp => {
      console.log(resp);
      if (resp.id) {
        this.toastr.success('Tarjeta Agregada', 'Success')
        this.tarjetaService.getTarjetas();
      } else {
        this.toastr.error('Error al Agregar Tarjeta', 'Error')
      }
      this.form.reset();
    })
  }

  editar() {
    const tarjeta: TarjetaCredito = {
      id: this.tarjeta?.id,
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    this.tarjetaService.actualizarTarjeta(this.idTarjeta, tarjeta).subscribe(resp => {
      console.log(resp);
      this.toastr.info('Tarjeta Actualizada', 'Success')
      this.tarjetaService.getTarjetas();

      this.form.reset();
      this.tarjeta = undefined;
      this.idTarjeta = 0;
    })
  }

  campoInvalido(campo: string) {
    return this.form.get(campo)?.invalid &&
      this.form.get(campo)?.touched
  }



}
