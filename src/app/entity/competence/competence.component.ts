import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfilService } from 'src/app/Profil.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.css']
})
export class CompetenceComponent implements OnInit {

  displayedColumns=['libelle','descriptif','sup','mod'];
  dataSource :any; 
  currentUser: any ="";

  constructor(private profileService: ProfilService ,private modalService:NgbModal ,private router: Router) { }

  ngOnInit(): void {

    this.profileService.affichCompetence().subscribe(
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
  removeCompetence(id: number): void{
    this.profileService.archiveCompetence(id).subscribe(
      (data: any ) => {
        this.currentUser = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      });
  }
  openModal(content:any){
    this.modalService.open(content,{ariaLabelledBy:'modal-basic-title',size:'lg'})
      }
}
