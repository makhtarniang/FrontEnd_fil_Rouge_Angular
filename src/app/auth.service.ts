import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
private _loginUrl ='/api/login_check';

constructor(private http:HttpClient){}




loginUser(user :any){
  console.log(user);
  return this.http.post<any>(this._loginUrl, user);
}
 
}
