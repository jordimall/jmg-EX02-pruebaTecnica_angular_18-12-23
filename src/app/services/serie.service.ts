import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'https://api.themoviedb.org/3/tv/';
@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private http: HttpClient) {}

  getAll = (page:number): Observable<any[]> => {
    return this.http.get<any[]>(`${baseURL}/on_the_air?page=${page}`);
  };

  getById = (id: number): Observable<any> => {
    return this.http.get<any[]>(`${baseURL}/${id}`);
  };
}
