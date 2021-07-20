import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-cadastro',
  templateUrl: './cidade-cadastro.component.html',
  styleUrls: ['./cidade-cadastro.component.css']
})
export class CidadeCadastroComponent implements OnInit {

  uf = [
    { label: 'Rio de Janeiro', value: 1 },
    { label: 'São Paulo', value: 2 },
    { label: 'Minas Gerais', value: 3 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
