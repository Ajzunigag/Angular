import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module'; // Importa el módulo de heroes

import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeroesModule,
    AppRoutingModule,
    DbzModule, // Importa el módulo DbzModule aquí
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
