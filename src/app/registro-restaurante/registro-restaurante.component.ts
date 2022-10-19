import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-registro-restaurante',
  templateUrl: './registro-restaurante.component.html',
  styleUrls: ['./registro-restaurante.component.css']
})
export class RegistroRestauranteComponent implements OnInit {

  restaurante: Restaurante = new Restaurante();

  constructor(private router: Router, private restauranteService:RestauranteService) { }

  ngOnInit(): void {
  }

  saveRestaurante(){
    this.restauranteService.saveRestaurante(this.restaurante).subscribe(dato => {
      console.log(dato);
      this.irListaDeRestaurantes();
    }, error => console.log(error));
  }

  irListaDeRestaurantes(){
    this.router.navigate(['/listar-restaurantes']);
  }
  onSubmit(){
    this.saveRestaurante();
    
  }
}
