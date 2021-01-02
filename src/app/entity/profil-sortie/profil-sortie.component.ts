import { Component, OnInit } from '@angular/core';
import { ProfilService  } from '../../Profil.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.css']
})
export class ProfilSortieComponent implements OnInit {
  displayedColumns=['libelle','sup','mod'];
  dataSource :any; 
  currentUser: any ="";
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
  removePorfilSortie(id: number): void{
    this.userservice.archivePorfilSortie(id).subscribe(
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
  constructor(private userservice: ProfilService ,private router: Router,private modalService:NgbModal){}
}
