import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo7',
  templateUrl: './ejemplo7.component.html',
  styleUrls: ['./ejemplo7.component.css']
})
export class Ejemplo7Component implements OnInit {

  miColor = 'green';

  constructor() {
  }

  ngOnInit() {
  }

  getColor() {
    return 'yellow';
  }

  hayError() {
    return false;
  }

  ponerBonito() {
    return true;
  }

}

