import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StvService {

  constructor(private http: HttpClient) { }
  searchSer(query:string){
    const url= `https://api.tvmaze.com/search/shows?q=${query}`
    const headers = new HttpHeaders("Content-Type");

    let obsSerietv = this.http.get(url, { headers });
    return obsSerietv;
  }
}
