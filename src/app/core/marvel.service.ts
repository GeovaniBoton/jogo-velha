import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private PUBLIC_KEY = 'abb66c1eaacf1c245c80d32c6240c5e6';
  private HASH = '42f1850a255cede30de2de60067771b9';
  private URL_API = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private httpClient: HttpClient) { }


  getAllHeroes(name?: string): Observable<any> {
    let query: string = '';
    if(name) query += `&nameStartsWith=${name}`;

    return this.httpClient.get<any>(`${this.URL_API}` + query)
    .pipe(map( data => data.data.results));
  }
}
