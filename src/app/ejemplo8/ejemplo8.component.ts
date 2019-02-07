import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  templateUrl: './ejemplo8.component.html',
  styleUrls: ['./ejemplo8.component.css']
})
export class Ejemplo8Component implements OnInit {


  resultado = 0;

  num1 = 0;
  num2 = 0;

  constructor() {
  }

  ngOnInit() {
  }

  realizarSuma(num1, num2) {
    this.resultado = Number(num1) + Number(num2);
  }
}
