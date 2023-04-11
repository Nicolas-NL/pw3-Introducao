import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ocultar =true;
@Input() tamanho: number = 0;

botao = false;
individual(){

  this.tamanho = 1;
  this.exibirOcultar();
}
Casal(){
   this.tamanho = 2;

  this.exibirOcultar();
}
Familia(){

  this.tamanho = 3;

  this.exibirOcultar();
}
Amigos(){

  this.tamanho = 4;

  this.exibirOcultar();
}

exibirOcultar(){
  this.ocultar = !this.ocultar;


}
}
