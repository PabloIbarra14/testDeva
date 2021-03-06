import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json');
  }

  sendData(data:any,url:string): Observable<any> {
    return this.http.post<any>(url, data);
  }
}
