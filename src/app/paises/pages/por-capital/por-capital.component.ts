import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  paises: Country[] = [];
  pais: string = '';
  isError: boolean = false;

  placeholder: string ='Buscar por capital...';

  constructor(private paisesService: PaisesService){}

  buscarCapital(pais: string): void {
    this.pais = pais;
    this.paisesService.buscarCapital(this.pais).subscribe({
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

}
