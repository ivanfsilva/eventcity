import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  cidadesUrl = 'http://localhost:8080/cities';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.cidadesUrl}`)
      .toPromise()
      .then(response => response);
  }
}
