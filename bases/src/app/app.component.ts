import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bases';
  // public counter: number = 10;

  //Metodo
  //Aumentar 1
  /*  increasby(): void {
    this.counter += 1;
  }
  //Disminuir 1
  descrementa(): void {
    this.counter -= 1;
  }
  //Resetiar
  reset(): void {
    this.counter = 10;
  }*/
}
