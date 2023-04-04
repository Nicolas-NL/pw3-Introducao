import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrasesComponent } from './frases/frases.component';
import { BiscoitoComponent } from './biscoito/biscoito.component';
import { BiscoitoFraseComponent } from './biscoito-frase/biscoito-frase.component';

@NgModule({
  declarations: [
    AppComponent,
    FrasesComponent,
    BiscoitoComponent,
    BiscoitoFraseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
