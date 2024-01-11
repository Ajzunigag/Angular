import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  //Las interfaces se comparten datos en general como en este caso nombre
  public Character: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];
  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.Character.push(character);
  }

  onDeleteCharacter(index: number) {
    this.Character.splice(index, 1);
  }
  //Eliminacion por Id
  deleteCharacterById(id: string) {
    this.Character = this.Character.filter((character) => character.id !== id);
  }
}
