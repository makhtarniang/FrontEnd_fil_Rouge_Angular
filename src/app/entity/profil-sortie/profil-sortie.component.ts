import { Component, OnInit } from '@angular/core';
import { ProfilService  } from '../../Profil.service';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.css']
})
export class ProfilSortieComponent implements OnInit {
  displayedColumns=['libelle','sup','mod'];
  dataSource :any;
 

  ngOnInit(): void {

  this.userservice.affichProfilSortie().subscribe(
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
