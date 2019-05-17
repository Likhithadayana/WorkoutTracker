import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {

  }

  private url: string = '';

  getData(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

}
