import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { countercomponents } from './Counter/Components/Counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    countercomponents,
  HeroComponent], // Agrega tus componentes aquí
  bootstrap: [], // Agrega el componente principal aquí
  providers:[]
})
export class AppModule {}
