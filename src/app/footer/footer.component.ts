import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,private modalService:NgbModal
    //,private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.modalService.dismissAll();
    console.log('Tentative de déconnexion');
  }
 
  openModal(content:any){
  this.modalService.open(content,{ariaLabelledBy:'modal-basic-title',size:'lg'})
  }
}
