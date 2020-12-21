import { JwtHelperService } from "@auth0/angular-jwt";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  
        
    helper = new JwtHelperService();
    token = localStorage.getItem('token');
    
    decodeToken(token:string){
        return this.helper.decodeToken(token)
    }
    getTokenExpirationDate(token:string){
        return this.helper.getTokenExpirationDate(token)
    }

    isTokenExpired(token:string){
        return this.helper.isTokenExpired(token)
    } 
}
