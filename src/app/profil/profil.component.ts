import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfilService  } from '../Profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
    
    displayedColumns=['id','libelle','sup','mod'];
    dataSource :any;
    
ngOnInit(): void {
  
  this.userservice.affichProfil().subscribe(
    (response:any)=>
    { 
      this.dataSource=response ['hydra:member'];
      console.log(this.dataSource)   
    },

    (error:any)=>
    {
      console.log(error);
    }
  )
  }
  constructor(private userservice: ProfilService ){}
    
  }
  
  

