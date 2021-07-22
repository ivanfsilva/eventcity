import {Component, OnInit} from '@angular/core';
import {CidadeService} from '../cidade.service';

@Component({
  selector: `app-cidades-pesquisa`,
  templateUrl: './cidades-pesquisa.component.html',
  styleUrls: ['./cidades-pesquisa.component.css']
})
export class CidadesPesquisaComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.cidadeService.pesquisar()
      .then(cidades => this.cidades = cidades);
  }

}
