import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionRestauranteComponent } from './gestion-restaurante/gestion-restaurante.component';
import { ListarRestaurantesComponent } from './listar-restaurantes/listar-restaurantes.component';
import { RegistroRestauranteComponent } from './registro-restaurante/registro-restaurante.component';

const routes: Routes = [
  {path :"", component:ListarRestaurantesComponent, pathMatch:"full"},
  {path: "registro-restaurantes", component:RegistroRestauranteComponent},
  {path :"listar-restaurantes", component:ListarRestaurantesComponent},
  {path: "app-gestion-restaurante", component:GestionRestauranteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
