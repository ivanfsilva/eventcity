import { Component } from '@angular/core';

@Component({
  selector: 'app-cities-search',
  templateUrl: './cities-search.component.html',
  styleUrls: ['./cities-search.component.css']
})
export class CitiesSearchComponent {

  cidades = [
    { cidade: 'Rio de Janeiro' },
    { cidade: 'São Paulo' },
    { cidade: 'Belo Horizonte' }
  ];

}
