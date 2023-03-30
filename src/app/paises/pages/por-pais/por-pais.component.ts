import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
  `
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  pais: string = '';
  isError: boolean = false;
  placeholder: string ='Buscar por país...';

  constructor(private paisesService: PaisesService){}

  buscarPais(pais: string): void {
    this.pais = pais;
    this.paisesService.buscarPais(this.pais).subscribe({
      next: (response) => {
        console.log(response);
        this.paises = response;
        this.isError = false;
      },
      error: (error)=> {
        console.error(error);
        this.isError = true;
        this.paises = [];
      }
    }
      
    );

  }

  buscarSugerencias(sugerencia: string ){
    this.isError = false;
    this.pais = sugerencia;
    this.paisesService.buscarPais(sugerencia).subscribe({
      next: paises => {
        this.paisesSugeridos = paises.splice(0,5);
      },
      error: error => {
        console.error(error);
        this.paisesSugeridos = [];
      }
    });
  }

}
