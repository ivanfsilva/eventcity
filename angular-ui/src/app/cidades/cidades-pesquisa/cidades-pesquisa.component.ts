import { Component } from '@angular/core';

@Component({
  selector: `app-cidades-pesquisa`,
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent {

  cidades = [
    { cidade: 'Rio de Janeiro' },
    { cidade: 'São Paulo' },
    { cidade: 'Belo Horizonte' }
  ];

}
