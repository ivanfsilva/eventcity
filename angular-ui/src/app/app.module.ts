import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CidadesModule } from './cidades/cidades.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CidadeService } from './cidades/cidade.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CidadesModule
  ],
  providers: [CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
