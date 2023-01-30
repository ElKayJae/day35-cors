import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  URL = "http://localhost:8080/games"

  constructor(private httpClient: HttpClient) { }

  getGames(limit: number, offset: number): Observable<any>{
    const queryParams = new HttpParams()
      .set("limit", limit)
      .set("offset", offset);

    const headers = new HttpHeaders()
      .set("content-type", "application/json")
      .set("Access-Control-Allow-Origin", "*")

    return this.httpClient.get<any>(this.URL, {params: queryParams, headers: headers})
  }

 
}