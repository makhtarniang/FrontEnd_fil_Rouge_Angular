import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../auth.service';
import { FormBuilder, FormGroup, NgForm, Validators } from  '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;

  loginForm: any
  isValidatFormSubmid =false;
  isSubmitted = false;
  submitted = false;
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
  get f() { return this.form.controls; }
  onReset() {
    this.submitted = false;
    this.form.reset();
}
loginUser(){
  this.submitted = true;
  this._auth.loginUser(this.loginUserData)
  .subscribe(
    res =>{
      console.log(res)
      const token=res.token;
localStorage.setItem('token',token);
this.rout.navigate(['/footer'])
console.log(this.form.value);

    },
    err=>console.log(err)
  )
}
onFormSubmit(form:NgForm){
  this.isValidatFormSubmid = false;
   if(form.valid){
   this.isValidatFormSubmid =true;
 }
 else{
   return;
 }
 /*
 let nom=form.controls['nom'].value;
 let prenom=form.controls['prenom'].value;
 let email=form.controls['email'].value;*/

  }

}


