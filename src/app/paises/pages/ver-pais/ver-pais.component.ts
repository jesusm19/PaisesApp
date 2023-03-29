import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{
  
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
    ){}

  ngOnInit(): void {
    /*this.activatedRoute.params.subscribe(
      ({ id }) => {
        console.log(id);

        this.paisesService.buscarPaisPorCodigo(id).subscribe({
          next: response =>{
            console.log(response);
          }
        });
      }
    );*/

    //TODO Otra manera de realizarlo

    this.activatedRoute.params
      .pipe(
        switchMap(
          ({id}) => {
            return this.paisesService.buscarPaisPorCodigo(id);
          }
          
        )
      )
      .subscribe(
        response => {
          this.pais = response[0];
          console.log(this.pais)
        }      
      );
  }

}
