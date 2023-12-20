import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module'; // Importa el módulo de heroes

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroesModule, // Importa el módulo de heroes en imports
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
