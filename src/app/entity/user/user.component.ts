import { Component, OnInit ,ViewChild} from '@angular/core';
import { UserService } from '../../users.service';
import {MatPaginator} from '@angular/material/paginator';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',    
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    displayedColumns=['avatar','nom','prenom','email','type','sup','mod'];
    dataSource =new MatTableDataSource<any> ();  
    
    userObjet:any={};
   @ViewChild(MatPaginator)
   paginator!:MatPaginator;
   currentUser =null;
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    }
    //AdminEmail =this.authService.getEmail();
    /*@ViewChild(MatSort) sort:MatSort | undefined;
    @ViewChild(MatPaginator) paginator:MatPaginator | undefined;*/
    constructor(private userservice:UserService ,private router: Router,private modalService:NgbModal ){}
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
 //  this. listData =new MatTableDataSource;
   /*this.listData.sort =this.sort;
   this .listData.paginator=this.paginator;*/
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

  /*  updatUser(id: number, nom: string,prenom:string,email:string,avatar:any) {
      const editField = avatar.target.textContent;
      this.userupd[id][nom][prenom][email] = editField;
    }*/
   /* logout() {
      localStorage.removeItem('user');
     
      this.modalService.dismissAll();
      console.log('Tentative de déconnexion');
    }*/
   
    openModal(content:any){
  this.modalService.open(content,{ariaLabelledBy:'modal-basic-title',size:'lg'})
    }
}



