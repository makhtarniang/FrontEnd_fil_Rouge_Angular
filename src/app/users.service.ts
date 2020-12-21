import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }

  afficheUser():any
  {
    return this.http.get<any>("/api/admin/users");
  }

  
  ajoutUser(data: any):Observable  <any>{
    return this.http.post ("/api/admin/users",data)
  }
}
