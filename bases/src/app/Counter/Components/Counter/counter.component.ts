//Clases

import { Component, OnInit } from '@angular/core';

//Componente con @
@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increasby()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="descrementa()">-1</button>
  `,
})
export class countercomponents implements OnInit {
  constructor() {}

  public counter: number = 10;

  //Metodo
  //Aumentar 1
  increasby(): void {
    this.counter += 1;
  }
  //Disminuir 1
  descrementa(): void {
    this.counter -= 1;
  }
  //Resetiar
  reset(): void {
    this.counter = 10;
  }

  ngOnInit() {}
}
