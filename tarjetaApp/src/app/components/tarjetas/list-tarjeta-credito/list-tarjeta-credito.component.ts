import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../../services/tarjeta.service';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from '../../../interfaces/tarjeta.interface';

@Component({
  selector: 'app-list-tarjeta-credito',
  templateUrl: './list-tarjeta-credito.component.html',
  styleUrls: ['./list-tarjeta-credito.component.css']
})
export class ListTarjetaCreditoComponent implements OnInit {

  get tarjetas() {
    return this.tarjetaService.tarjetas;
  }

  constructor(
    private tarjetaService: TarjetaService,
    private toastr:ToastrService
  ) {
    
   }

  ngOnInit(): void {
    this.tarjetaService.getTarjetas();
  }

  eliminar(id:number) {
    if (confirm('Esta seguro que desea eliminar?')) {
      this.tarjetaService.eliminarTarjeta(id).subscribe(resp => {
        console.log(resp);
        this.toastr.warning('Registro Eliminado','Tarjeta Eliminada');
        this.tarjetaService.getTarjetas();
      })
    }
  }

  editar (tarjeta :TarjetaCredito) {
    this.tarjetaService.actualizar(tarjeta);
  }



}
