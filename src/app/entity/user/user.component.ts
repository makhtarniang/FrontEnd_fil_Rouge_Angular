import { Component, OnInit ,ViewChild} from '@angular/core';
import { UserService } from '../../users.service';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',    
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    displayedColumns=['avatar','nom','prenom','email','type','sup','mod'];
    dataSource :any;  
    currentUser: any ="";
    constructor(private userservice:UserService ,private router: Router,private modalService:NgbModal){}
  ngOnInit(): void {
    this.userservice.afficheUser().subscribe(
      (response:any)=>
      {  
        this.dataSource=response['hydra:member']
        console.log(this.dataSource)   
      },
      (error:any)=>
      {
        console.log(error);
      }
    )
  }
    removeUser(id: number): void{
      this.userservice.archiveUser(id).subscribe(
        (data: any ) => {
          this.currentUser = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        });
    }
   /* logout() {
      localStorage.removeItem('user');
     
      this.modalService.dismissAll();
      console.log('Tentative de déconnexion');
    }*/
   
    openModal(content:any){
  this.modalService.open(content,{ariaLabelledBy:'modal-basic-title',size:'lg'})
    }
}



