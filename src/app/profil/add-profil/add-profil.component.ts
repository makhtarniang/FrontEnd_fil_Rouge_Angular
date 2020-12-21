import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {

  form =new FormGroup({
    nom: new FormControl('',[
      Validators.required
    ])
  })
  constructor() { }

  ngOnInit(): void {
  }

  ajouProfil(){
    console.log(this.form.value);
    
  }

}
