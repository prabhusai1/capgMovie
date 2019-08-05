import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  private options = { headers: this.headers }

  constructor(private http: HttpClient) { }

  onSubmit(name: string) {
    console.log(name);
    return this.http.get("http://localhost:8080/catalog/" + name, this.options);
  }
}
