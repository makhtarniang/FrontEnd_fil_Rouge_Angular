import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={
    email:'',
    password:'',
  }
  constructor(private _auth: AuthService ,private rout:Router ){}
  
  ngOnInit(): void {
  }
loginUser(){
  this._auth.loginUser(this.loginUserData)
  .subscribe(
    res =>{
      console.log(res)
      const token=res.token;
localStorage.setItem('token',token);
this.rout.navigate(['/footer'])
    },
    err=>console.log(err)
  )
}
}


