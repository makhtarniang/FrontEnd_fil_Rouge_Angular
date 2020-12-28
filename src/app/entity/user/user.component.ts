import { Component, OnInit } from '@angular/core';

import { UserService } from '../../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',    
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


    displayedColumns=['id','avatar','nom','prenom','email','type','sup','mod'];
    dataSource :any;
  
 
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
   constructor(private userservice:UserService ){}
}



