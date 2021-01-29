import { Component, OnInit } from '@angular/core';
import { ProfilService  } from '../../Profil.service';
@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  displayedColumns=['libelle','descriptif','sup','mod'];
  dataSource :any; 
  currentUser: any ="";

  constructor(private userservice: ProfilService) { }

  ngOnInit(): void {

    this.userservice.affichCompetence().subscribe(
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

}
