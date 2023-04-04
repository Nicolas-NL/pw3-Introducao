import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {
  @Input() ocultar=true;
  frases =['Calvo pra Vida Toda','Muito Calvo para ser calculada sua sorte','Calvo as 2 anos '];

  sorteio(){
    return this.frases[Math.floor(Math.random()*this.frases.length)];
  }

}
