import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/users.service';
import { NgForm} from  '@angular/forms';
import { ProfilSortieComponent } from '../../profil-sortie/profil-sortie.component';
import { ProfilService } from 'src/app/Profil.service';
import { data } from 'jquery';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  submitted=false
  form: FormGroup | any;
  avatar:any;
 image:any
 
  //newUser= new  ();
  isValidatFormSubmid =false
  url="../assets/img/ico.jpg"
  message :any;
  profils:any
  constructor(private formBuilder:FormBuilder,private service: UserService ,private ProfileService:ProfilService ) { }

  ngOnInit(): void {
  this.ProfileService.affichProfil().subscribe(
    (datas:any) =>{
      this.profils= datas
      console.log(datas);
    }
  )
    this.form =this.formBuilder.group({
      nom: new FormControl('',[
  
        Validators.required
      ]),
        prenom: new FormControl('',[
          Validators.required
        ]),
        email: new FormControl('',[
          Validators.required,Validators.email
        ]),
        avatar: new FormControl('',[
         
        ]),
        profil_id: new FormControl('',[
         
        ]),
    })  
  }
  imageloat=(event: any)=>{
    this.image=event.target.files[0]
  }
   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }


   onReset() {
       this.submitted = false;
       this.form.reset();
   }
   ajouUser(data:any){

    this.submitted = true;

    const formdata = new FormData();
    formdata.append('nom',this.form.value['nom'])
    formdata.append('prenom',this.form.value['prenom'])
    formdata.append('email',this.form.value['email'])
    formdata.append('avatar',this.image)
    formdata.append('profil_id',this.form.value['profil_id'])
    console.log(this.form.value);
   // this.message = "User"+ this.newUser.newUser + "Ajouter avec success !!";
    this.service.ajoutUser(formdata).subscribe(
      response => {
        console.log(response);
        this.form.reset();
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
 /*
 let nom=form.controls['nom'].value;
 let prenom=form.controls['prenom'].value;
 let email=form.controls['email'].value;*/

  }

}
