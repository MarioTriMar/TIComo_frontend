import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarRestaurantesComponent } from './listar-restaurantes/listar-restaurantes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroRestauranteComponent } from './registro-restaurante/registro-restaurante.component';
import { FormsModule } from '@angular/forms';
import { GestionRestauranteComponent } from './gestion-restaurante/gestion-restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarRestaurantesComponent,
    RegistroRestauranteComponent,
    GestionRestauranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
