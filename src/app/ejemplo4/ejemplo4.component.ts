import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {

  contador = 0;

  mensaje: string;

  constructor() {
  }

  ngOnInit() {
  }

  incrementar() {
    this.contador += 1;
    this.esPar();
  }

  esPar() {
    if (this.contador % 2 === 0) {
      this.mensaje = 'par';
    } else {
      this.mensaje = 'impar';
    }
  }
}
