import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo',
  templateUrl: './ejemplo12-hijo.component.html',
  styleUrls: ['./ejemplo12-hijo.component.css']
})
export class Ejemplo12HijoComponent implements OnInit {

  @Input()
  public colorPadre = 'black';
  @Input()
  public nombrePadre = 'huerfano';

  constructor() {
  }

  ngOnInit() {
  }

}
