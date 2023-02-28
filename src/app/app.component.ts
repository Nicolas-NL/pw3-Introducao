import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-introducao';
   logo = "favicon.ico";
   Nome = "Nicolas";
   Sobrenome="Lima";
   Idade = 17;
   ocultar = true;

   NomeCompleto(){
    this.Nome+this.Sobrenome
    return this.Nome+' '+this.Sobrenome
   }
    obterAlerta(){
      alert("Hoje é Terça-feira");
    }
    exibirOcultar(){
         this.ocultar = !this.ocultar;

       }

}
