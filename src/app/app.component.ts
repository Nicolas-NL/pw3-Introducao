import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-introducao';
   Nome = "Nicolas";
   Sobrenome="Lima";
   Idade = 17;

   NomeCompleto(){
    this.Nome+this.Sobrenome
    return this.Nome+' '+this.Sobrenome


   }
}
