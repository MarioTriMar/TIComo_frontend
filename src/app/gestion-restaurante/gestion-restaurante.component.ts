import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';
import { Router } from '@angular/router';
import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-gestion-restaurante',
  templateUrl: './gestion-restaurante.component.html',
  styleUrls: ['./gestion-restaurante.component.css']
})
export class GestionRestauranteComponent implements OnInit {

  restaurante: Restaurante=new Restaurante();
  constructor(private router:Router, private restauranteService:RestauranteService) { }

  ngOnInit(): void {
    this.Gestion();
  }

  Gestion(){
    let cif = (localStorage.getItem('cif')!);
    this.restauranteService.getRestauranteById(cif).subscribe(data=>{
      this.restaurante=data;
    })
  }

  atras(){
    this.router.navigate(['/listar-restaurantes']);
  }
  eliminar(restaurante:Restaurante){
    this.restauranteService.deleteRestauranteById(restaurante.cif).subscribe(data=>{
      this.restaurante=this.restaurante;
      alert("Restaurante eliminado");
      this.router.navigate(['/listar-restaurantes']);
    })
  }
  editar(restaurante:Restaurante){
    localStorage.setItem("cif", restaurante.cif.toString());
    this.router.navigate(['/app-gestion-restaurante']);
  }
}
