import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfilService } from 'src/app/Profil.service';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  submitted=false
  form: any;
  id:any;
  user:any
  image:any
  profils:any
  //newUser= new  ();
  isValidatFormSubmid =false
  url="../assets/img/ico.jpg"
  message :any;
  constructor(private formBuilder:FormBuilder,private service: UserService, private route: ActivatedRoute ,private ProfileService:ProfilService) { }

  ngOnInit(): void {
    this.ProfileService.affichProfil().subscribe(
      datas =>{
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
          Validators.required
        ]),
        avatar: new FormControl('',[
         
        ]),
        profil_id: new FormControl('',[
         
        ]),
    })  

    this.loadData();
   // this.id = this.route.snapshot.paramMap.get('id');
   
  }
 
  loadData(){
    this.route.paramMap.subscribe(
      params =>
      this.id = params.get('id')
      
      );
        console.log(this.id);

    this.service.getUser_by_id(this.id).subscribe(
      
      data=>{
        console.log(data);
        this.user=data;
      }
    )
   }

   onSubmit() {
       this.submitted = true;
     
       // stop here if form is invalid     
       if (this.form.invalid) {
           return;
       }

   }

   onReset() {
       this.submitted = false;
       this.form.reset();
   }
   
  ajouUser(form:any){
    const formdata = new FormData();
    formdata.append('nom',this.form.value['nom'])
    formdata.append('prenom',this.form.value['prenom'])
    formdata.append('email',this.form.value['email'])
    formdata.append('avatar',this.image)
    formdata.append('profil_id',this.form.value['profil_id'])
    console.log(this.form.value);
   // this.message = "User"+ this.newUser.newUser + "Ajouter avec success !!";
    this.service.updatUser(this.id, formdata).subscribe(
      response => {
        console.log(response);
      }
    );
  }
 /* selectedFile(files: FileList,event:any)
  {
    this.avatar=files.item(0);
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload =(event:any) =>
    {
      this.url=event.target.result
    }
    
  }*/
  imageloat=(event: any)=>{
    this.image=event.target.files[0]
  }
  onFormSubmit(form:NgForm){
this.isValidatFormSubmid = false;
 if(form.valid){
   this.isValidatFormSubmid =true;
 }
 /*
 let nom=form.controls['nom'].value;
 let prenom=form.controls['prenom'].value;
 let email=form.controls['email'].value;
*/
 else{
   return;
 }
 /*
 let nom=form.controls['nom'].value;
 let prenom=form.controls['prenom'].value;
 let email=form.controls['email'].value;
*/
  }

  
}
