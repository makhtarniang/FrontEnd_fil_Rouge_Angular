import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
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
  constructor(private _auth: AuthService){}
  
  ngOnInit(): void {
  }
loginUser(){
  this._auth.loginUser(this.loginUserData)
  .subscribe(
    res =>{
      console.log(res)
      const token=res.token;
localStorage.setItem('token',token);
    },
    err=>console.log(err)
  )
}
/*constructor (private con:ConnexionService,private router:Router)
login(credentials:any){
this.con.GetToken(credentials).subscribe(
(response:any)=>
{
const token=response.token;
localStorage.setItem('token',token);
this.router.navigate(['profils']);
},
(error:any)=>
{}
)*/
}


