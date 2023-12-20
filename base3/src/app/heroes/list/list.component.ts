import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroName: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'She Hulk',
    'Thor',
  ];

  public deletedHero:string=''

  //Borrar el ultimo heroe
  removeLastHero(): void {
    const deletedHero = this.heroName.pop();
    console.log({ deletedHero });
  }

  //
}
