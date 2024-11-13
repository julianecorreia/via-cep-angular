import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  private readonly baseUrl = 'https://viacep.com.br/ws';

  private httpClient = inject(HttpClient)

  consultarCep(cep: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${cep}/json/`);
  }

}
