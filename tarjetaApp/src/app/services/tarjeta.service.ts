import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TarjetaCredito } from '../interfaces/tarjeta.interface';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  baseUrl : string = environment.baseUrl;
  miApi = 'api/TarjetaCredito'

  private actualizarFormulario = new BehaviorSubject<TarjetaCredito>({} as any);

  private _tarjetas : TarjetaCredito[] = [];

  get tarjetas() {
    return [...this._tarjetas];
  }

  constructor(
    private http : HttpClient
  ) { }

  guardarTarjeta(tarjeta : TarjetaCredito) :Observable<TarjetaCredito> {

    const url : string = `${this.baseUrl}/${this.miApi}`;

    return this.http.post<TarjetaCredito>(url,tarjeta);
  }

  getTarjetas() {

    const url : string = `${this.baseUrl}/${this.miApi}`;

    this.http.get<TarjetaCredito[]>(url).subscribe( tarjetas => {
      this._tarjetas = tarjetas;
    })
  }

  eliminarTarjeta(id:number) {

    const url : string = `${this.baseUrl}/${this.miApi}/${id}`;

    return this.http.delete<TarjetaCredito>(url);
  }
  actualizarTarjeta(id: number, tarjeta: TarjetaCredito) {
    const url : string = `${this.baseUrl}/${this.miApi}/${id}`;

    return this.http.put<TarjetaCredito>(url,tarjeta);
  }


  actualizar(tarjeta : any) {
    this.actualizarFormulario.next(tarjeta);
  }

  obtenerTarjeta() :Observable<TarjetaCredito> {
    return this.actualizarFormulario.asObservable();
  }



}
