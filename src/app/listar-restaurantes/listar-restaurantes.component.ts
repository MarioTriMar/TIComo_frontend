import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-listar-restaurantes',
  templateUrl: './listar-restaurantes.component.html',
  styleUrls: ['./listar-restaurantes.component.css']
})
export class ListarRestaurantesComponent implements OnInit {

  restaurantes:Restaurante[];

  constructor(private restauranteServicio: RestauranteService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerRestaurantes();
  }

  private obtenerRestaurantes(){
    this.restauranteServicio.getRestaurantes().subscribe(dato => {
      this.restaurantes=dato;
    });
  }

  irAregistroRestaurantes(){
    this.router.navigate(['/registro-restaurantes']);
  }

  Gestion(restaurante:Restaurante){
    localStorage.setItem("cif", restaurante.cif.toString());
    this.router.navigate(['/app-gestion-restaurante']);
  }
}
