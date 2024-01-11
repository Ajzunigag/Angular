import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  //Para recibir datos de otra pagina se utiliza el input
  @Input()
  public characterList: Character[] = [{ name: 'Trunk', power: 100 }];

  //onDelete=index
  @Output()
  public onDelete = new EventEmitter();

  onDeleteCharacter(id: string): void {
    //if (!id) return;
    this.onDelete.emit(id);
  }
}
