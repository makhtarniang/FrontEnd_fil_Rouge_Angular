import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService {

  connected(){
    return !! localStorage.getItem('token');
    }
    
  constructor() { }
}
