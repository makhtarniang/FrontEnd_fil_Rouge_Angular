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

  loginForm: any

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
      password: ['', Validators.required,Validators.minLength(4)]
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


onFormSubmit(userForm :NgForm){
console.log(userForm);
}

resetUserForm(userForm:NgForm){
  userForm.resetForm();
}

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.loginForm.reset();
    }
}


