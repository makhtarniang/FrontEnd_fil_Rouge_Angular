import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ProfilService  } from 'src/app/Profil.service';
@Component({
  selector: 'app-add-profil-sortis',
  templateUrl: './add-profil-sortis.component.html',
  styleUrls: ['./add-profil-sortis.component.css']
})
export class AddProfilSortisComponent implements OnInit {
  form: any;
  constructor(private formBuilder:FormBuilder,private service:  ProfilService ) { }
  ngOnInit(): void {

   
  }
  
}