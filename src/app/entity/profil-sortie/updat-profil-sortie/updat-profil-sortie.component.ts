import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfilService } from 'src/app/Profil.service';

@Component({
  selector: 'app-updat-profil-sortie',
  templateUrl: './updat-profil-sortie.component.html',
  styleUrls: ['./updat-profil-sortie.component.css']
})
export class UpdatProfilSortieComponent implements OnInit {
form:any
id:any
user:any
  constructor(private formBuilder:FormBuilder,private service:  ProfilService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form =this.formBuilder.group({
      libelle: new FormControl('',[
        Validators.required
      ]),
    })
  }
  ajoutProfilSortie(data:any){
    this.service.ajoutProfilSortie(this.form.value).subscribe(
      response => {
        console.log(response);
      }
    );
  }
  loadData(){
    this.route.paramMap.subscribe(
      params =>
      this.id = params.get('id')
      );
        console.log(this.id);

    this.service.getprofilSortie_by_id(this.id).subscribe(
      
      data=>{
        console.log(data);
        this.user=data;
      }
    )
   }
}
