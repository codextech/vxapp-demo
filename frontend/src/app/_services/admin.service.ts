import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../_interfaces/IContact';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

constructor(private http: HttpClient) { }

/* Contact Request */
getUnReadRequests() {
  return this.http.get<any>(environment.apiUrl + 'api/admin/contact');
}
requestRead(contactId) {
  return this.http.get<any>(environment.apiUrl + 'api/admin/contact', {
    params: {contactId : contactId}
  });
}

/* App Calculator */

addCategory(model) {
  return this.http.post<any>(environment.apiUrl + 'api/admin/category', model);
}

addSubCategory(model) {
  return this.http.post<any>(environment.apiUrl + 'api/admin/sub-category', model);
}

}
