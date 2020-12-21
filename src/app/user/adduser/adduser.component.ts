import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/users.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private service: UserService) { }
  form =this.formBuilder.group({
    nom: new FormControl('',[

      Validators.required
    ]),
      prenom: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required
      ]),
      
      type: new FormControl('',[
        Validators.required
      ]),
      avatar: new FormControl('',[
       
      ]),
      profil: new FormControl('',[
       
      ]),
  })
  
  ngOnInit(): void {
  }
  ajouUser(data:any){
    console.log(this.form.value);
    this.service.ajoutUser(this.form).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
