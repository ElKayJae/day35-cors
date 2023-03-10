import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  URL = "https://aromatic-dogs-production.up.railway.app/games"

  constructor(private httpClient: HttpClient) { }

  getGames(limit: number, offset: number): Observable<any>{

    const queryParams = new HttpParams()
      .set("limit", limit)
      .set("offset", offset);

    const headers = new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*")

      //error in parsing JSON so set responseType as text, convert to json in later steps
    return this.httpClient.get(this.URL, {params: queryParams, headers: headers, responseType: 'text'})
  }

 
}
