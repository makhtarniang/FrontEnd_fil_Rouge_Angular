import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Profil } from 'src/model/Profil';
import {  ProfilService  } from 'src/app/Profil.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor(private profilService:  ProfilService ) { }

  ngOnInit(): void {
    
  }

  updateProfil(data:any): void {
   console.log(data)
    this.profilService.update(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error=> {
          console.log(error);
        });
        console.log(this.profilService)
  } 
}

