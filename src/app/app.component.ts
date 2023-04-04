import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ocultar =true;

individual(){

  this.exibirOcultar();
}
Casal(){

  this.exibirOcultar();
}
Familia(){

  this.exibirOcultar();
}
Amigos(){

  this.exibirOcultar();
}

exibirOcultar(){
  this.ocultar = !this.ocultar;


}
}
