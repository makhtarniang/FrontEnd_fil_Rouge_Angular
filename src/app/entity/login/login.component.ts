import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isSubmitted  =  false;
  loginUserData={
    email:'',
    password:'',
  }
  constructor( private router: Router,private authService: AuthService,private _auth: AuthService ,private rout:Router ,private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
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
get formControls() { return this.loginForm.controls; }
seConnecter(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }
  //this.authService.seConnecter(this.loginForm.value);
  this.router.navigateByUrl('/');
}



}


