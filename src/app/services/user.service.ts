import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_SERVICE } from '../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role, User } from '../models';

const USER_API = 'http://woinbobra.xyz:3000/users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  getAll(page: number,elements: number) : Observable<{count:number,rows:User[]}> {
    return this.http.get<{count:number,rows:User[]}>(USER_API + `config/page${page}/elements${elements}`, httpOptions);
  }

  getOne(id: number) : Observable<User> {
    return this.http.get<User>(USER_API + `${id}`, httpOptions);
  }

  getByRole(role: Role) : Observable<User[]>{
    return this.http.get<User[]>(USER_API + `role/${role}`, httpOptions);
  }


  create(user: User){
    return this.http.post<User>(USER_API,user,httpOptions);
  }

  changePassword(id: number, password: string) : Observable<User> {
    return this.http.patch<User>(USER_API + `change-password/${id}`,{password:password},httpOptions);
  }

  selfChangePassword(oldPassword: string, newPassword: string) : Observable<User> {
    return this.http.patch<User>(USER_API + `change-password`, { oldPassword: oldPassword, newPassword: newPassword}, httpOptions);
  } 

  update(id: number, firstName: string, secondName: string) : Observable<User> {
    return this.http.patch<User>(USER_API + `update/${id}`, { firstName: firstName, secondName: secondName}, httpOptions);
  } 

  activate(id: number) : Observable<User> {
    return this.http.patch<User>(USER_API + `activate/${id}`,{}, httpOptions);
  } 

  deactivate(id: number) : Observable<User> {
    return this.http.patch<User>(USER_API + `deactivate/${id}`,{}, httpOptions);
  }


}

export const UserServiceProviders = [
  {provide: USER_SERVICE, useValue: UserService}
];