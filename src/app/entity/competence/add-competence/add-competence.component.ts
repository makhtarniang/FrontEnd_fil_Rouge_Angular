import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { data } from 'jquery';
import { CompetenceServeService } from 'src/app/serve/competence-serve.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  form:any;
  submitted:any
  tabGroupCompetence:any
  constructor(private competenceService:CompetenceServeService,private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.competenceService.affichGroupCompetence().subscribe(
      data=>{
       
        this.tabGroupCompetence=data;
        this.tabGroupCompetence=this.tabGroupCompetence["hydra:member"]
        console.log(this.tabGroupCompetence)
      }
    )
    this.form =this.formBuilder.group({

      libelle: new FormControl('',[
        Validators.required
      ]),
      descriptif: new FormControl('',[
          Validators.required
        ]),
        groupeCometances:new FormControl('',[
          Validators.required
        ]),
        niveau:this.formBuilder.array(
         [
           this.formBuilder.group({
             libelle:["niveau1",[ Validators.required] ],
             critereEvaluation:["",[ Validators.required] ],
             groupeAction:["",[ Validators.required] ],
           }),
           this.formBuilder.group({
            libelle:["niveau2",[ Validators.required] ],
            critereEvaluation:["",[ Validators.required] ],
            groupeAction:["",[ Validators.required] ],
          }),
          this.formBuilder.group({
            libelle:["niveau3",[ Validators.required] ],
            critereEvaluation:["",[ Validators.required] ],
            groupeAction:["",[ Validators.required] ],
          })
         ]
        )
    }) 
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
}

  ajoutCompetence(data:any){
    console.log(this.form.value)
    this.competenceService.ajoutCompetence(this.form.value).subscribe(
     ( response:any) => {
        console.log(response);
        this.form.reset();
      }
    );
  }

}
