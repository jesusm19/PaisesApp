import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa','americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisesService: PaisesService){}

  activarRegion(region: string): void{

    if(region === this.regionActiva){ return}

    this.regionActiva = region;
    this.paises = [];
    this.paisesService.buscarPaisesPorRegion(this.regionActiva).subscribe({
      next: response =>{
        this.paises = response;
      },
      error: error => {
        console.error(error);
        this.paises = [];
      }
    });
  }

}
