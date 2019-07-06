import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../_interfaces/IContact';
import { IBlog } from '../_interfaces/IBlog';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient) { }

  addUserRequest(model) {
    return this.http.post<any>(environment.apiUrl + 'api/main/contact', model);
  }

  getBlogs() {
    return this.http.get<any>(environment.apiUrl + 'api/main/blog');
  }

  getCategrories() {
    return this.http.get<any>(environment.apiUrl + 'api/main/category');
  }

  // getSubCategrories() {
  //   return this.http.get<any>(environment.apiUrl + 'api/main/sub-category');
  // }
}
