import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/users.service';
import { NgForm} from  '@angular/forms';
import { ProfilSortieComponent } from '../../profil-sortie/profil-sortie.component';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  submitted=false
  form: any;
  avatar:any;
  
  isValidatFormSubmid =false
  url="../assets/img/ico.jpg"
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
   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.form.invalid) {
           return;
       }

       // display form values on success
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 8));
   }

   onReset() {
       this.submitted = false;
       this.form.reset();
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
  selectedFile(files: FileList,event:any)
  {
    this.avatar=files.item(0);
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload =(event:any) =>
    {
      this.url=event.target.result
    }
    
  }
  onFormSubmit(form:NgForm){
this.isValidatFormSubmid = false;
 if(form.valid){
   this.isValidatFormSubmid =true;
 }
 else{
   return;
 }
 
 let nom=form.controls['nom'].value;
 let prenom=form.controls['prenom'].value;
 let email=form.controls['email'].value;

  }

}
