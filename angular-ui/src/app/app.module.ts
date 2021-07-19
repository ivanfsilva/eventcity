import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CidadesPesquisaComponent } from './cidades-pesquisa/cidades-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroudColorInputDirective } from './backgroud-color-input.directive';
import { CidadeCadastroComponent } from './cidade-cadastro/cidade-cadastro.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CidadesPesquisaComponent,
    NavbarComponent,
    BackgroudColorInputDirective,
    CidadeCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
