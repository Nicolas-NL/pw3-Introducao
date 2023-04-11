import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {
  @Input() ocultar=true;
  frases =['Azar Eterno','Tenha piedade','Deus te Abencoe','1000 anos de Sorte'];

  sorteio(){
    return this.frases[Math.floor(Math.random()*this.frases.length)];
  }

}
