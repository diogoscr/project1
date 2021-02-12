import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Warning } from '../models/warning.model';


@Injectable({
  providedIn: 'root'
})
export class WarningService {

  baseUrl = 'https://project2-spring.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Warning[]>(this.baseUrl);
  }

  get(id: any): Observable<Warning> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

}
