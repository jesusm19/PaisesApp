import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html'
})
export class PaisesInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string ='';
  debouncer: Subject<string> = new Subject();

  pais: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe({
      next: (valor) =>{ 
        this.onDebounce.emit(valor)
      }
    });
  }

  buscarPais(){
    this.onEnter.emit(this.pais);
  }

  teclaPresionada( ) {
    this.debouncer.next(this.pais);
  }

}
