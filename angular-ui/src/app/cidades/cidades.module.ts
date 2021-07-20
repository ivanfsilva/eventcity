import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';

import {SharedModule} from '../shared/shared.module';
import {CidadesPesquisaComponent} from './cidades-pesquisa/cidades-pesquisa.component';
import {CidadeCadastroComponent} from './cidade-cadastro/cidade-cadastro.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    DropdownModule,

    SharedModule
  ],
  declarations: [
    CidadesPesquisaComponent,
    CidadeCadastroComponent
  ],
  exports: [
    CidadesPesquisaComponent,
    CidadeCadastroComponent
  ],

})
export class CidadesModule { }
