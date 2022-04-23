import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_SERVICE } from 'src/app/constants';
const AUTH_API = 'http://woinbobra.xyz:3000/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

}

export const AuthServiceProviders = [
  { provide: AUTH_SERVICE, useValue: AuthService }
];