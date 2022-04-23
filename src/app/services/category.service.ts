import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CATEGORY_SERVICE } from '../constants';
import { Category } from '../models';

const CATEGORY_API = 'http://woinbobra.xyz:3000/categories/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  getAll(page: number, elements: number) : Observable<{count:number,rows:Category[]}> {
    return this.http.get<{count:number,rows:Category[]}>(CATEGORY_API + `config/page${page}/elements${elements}`,httpOptions);
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(CATEGORY_API,httpOptions);
  }

  getOne(id: number) : Observable<Category> {
    return this.http.get<Category>(CATEGORY_API + `${id}`,httpOptions);
  }

  create(category: Category) : Observable<Category> {
    return this.http.post<Category>(CATEGORY_API, category, httpOptions);
  }

  update(id: number, name: string) : Observable<Category> {
    return this.http.put<Category>(CATEGORY_API + `${id}`,{name:name},httpOptions );
  }





}

export const CategoryServiceProviders = [
  {provide:CATEGORY_SERVICE, useValue: CategoryService}
];