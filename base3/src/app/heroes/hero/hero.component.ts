import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 24;

  //Metodo get
  get capitalizeName(): string {
    return this.name.toUpperCase(); //Mayusculas
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  //Metodos Cambiar Nombre
  chagenHero(): void {
    this.name = 'Spiderman';
  }
  //Cambiar edad
  changeAge(): void {
    this.age = 19;
  }
  //Metodo reset
  reset(): void {
    (this.name = 'iroman'), (this.age = 24);
  }
}
