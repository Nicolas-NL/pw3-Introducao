import { Component } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  BiscoitoInt = "assets/biscoito.png";
   BiscoitoQue = "assets/biscoito-aberto.png";
   ocultar = true;
   botao = false;


   QuebrarBiscoito(){
    this.exibirOcultar();
    this.botao= true;
    this.BiscoitoInt = this.BiscoitoQue;
   }

  exibirOcultar(){
    this.ocultar = !this.ocultar;


  }
}
