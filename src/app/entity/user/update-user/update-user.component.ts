import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  //editField: string;
  personList: Array<any> = []
  awaitingPersonList: Array<any> = []
  constructor() { }

  ngOnInit(): void {
  }
  updateList(id: number, nom: string,prenom:string,email:string,avatar:any) {
    const editField = avatar.target.textContent;
    this.personList[id][nom][prenom][email] = editField;
  }
  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }
}
