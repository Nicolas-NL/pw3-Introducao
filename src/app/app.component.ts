import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   BiscoitoInt = "assets/biscoito.png";
   BiscoitoQue = "assets/biscoito-aberto.png";
   ocultar = true;
   botao = false;

   frases =['Calvo pra Vida Toda','Muito Calvo para ser calculada sua sorte','Calvo as 2 anos '];
   QuebrarBiscoito(){
    this.exibirOcultar();
    this.botao= true;
    this.BiscoitoInt = this.BiscoitoQue;

   }
    exibirOcultar(){
         this.ocultar = !this.ocultar;


       }
    sorteio(){
      return this.frases[Math.floor(Math.random()*this.frases.length)];
    }

}
