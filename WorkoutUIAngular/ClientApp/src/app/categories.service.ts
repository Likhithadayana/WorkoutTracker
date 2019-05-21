import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category';
@Injectable()


export class CategoriesService {
  constructor(private http: HttpClient) {

  }

  private url: string = 'http://localhost:58602/api/Categories';

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  save(cat: Category) {
    return this.http.post(this.url, cat);
  }

  update(cat: Category) {
    return this.http.put(this.url, cat);
  }

  delete(categoryid: number) {
    return this.http.delete(this.url + `/$id`);
  }

}
