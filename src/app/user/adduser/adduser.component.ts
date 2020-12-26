import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  form: any;

  constructor(private formBuilder:FormBuilder,private service: UserService ) { }

  ngOnInit(): void {

    this.form =this.formBuilder.group({
      nom: new FormControl('',[
  
        Validators.required
      ]),
        prenom: new FormControl('',[
          Validators.required
        ]),
        email: new FormControl('',[
          Validators.required
        ]),
        
       
        avatar: new FormControl('',[
         
        ]),
        profil_id: new FormControl('',[
         
        ]),
    })
    
  }
  ajouUser(data:any){
    const formdata = new FormData();
    formdata.append('nom',this.form.value['nom'])
    formdata.append('prenom',this.form.value['prenom'])
    formdata.append('email',this.form.value['email'])
    formdata.append('avatar',this.form.value['avatar'])
    formdata.append('profil_id',this.form.value['profil_id'])
    console.log(this.form.value);
    this.service.ajoutUser(formdata).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
