import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cidades = [
    { cidade: 'Rio de Janeiro' },
    { cidade: 'São Paulo' },
    { cidade: 'Belo Horizonte' }
  ];
}
