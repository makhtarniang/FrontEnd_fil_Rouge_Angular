import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './entity/login/login.component';
import { AddProfilComponent } from './entity/profil/add-profil/add-profil.component';
import { EditProfilComponent } from './entity/profil/edit-profil/edit-profil.component';
import { ProfilComponent } from './entity/profil/profil.component';
import { AdduserComponent } from './entity/user/adduser/adduser.component';
import { UserComponent } from './entity/user/user.component';
import { ProfilSortieComponent } from './entity/profil-sortie/profil-sortie.component';
import { PromoComponent } from './entity/promo/promo.component';
import { CompetenceComponent } from './entity/competence/competence.component';
import { ReferencielComponent } from './entity/referenciel/referenciel.component';
import { GroupeCompetenceComponent } from './entity/groupe-competence/groupe-competence.component';
import { AddPromoComponent } from './entity/promo/add-promo/add-promo.component';
import { AddCompetenceComponent } from './entity/competence/add-competence/add-competence.component';
import { AddGroupeCompetenceComponent } from './entity/groupe-competence/add-groupe-competence/add-groupe-competence.component';
import { AddRefeferencielComponent } from './entity/referenciel/add-refeferenciel/add-refeferenciel.component';
import { AddProfilSortisComponent } from './entity/profil-sortie/add-profil-sortis/add-profil-sortis.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
     path:'footer',component:FooterComponent, children:[
       {
         path: '',
         redirectTo:'listerUser',
         pathMatch:'full'
       },
     
      { path:'' ,component:LoginComponent},
      { path:'listerProfil',component:ProfilComponent},
      { path:'listerUser',component:UserComponent},
      { path:'pageDaccuiel',component:FooterComponent},
      { path:'add-profil',component:AddProfilComponent},
      { path:'editProfil',component:EditProfilComponent},
      { path:'addUser' ,component:AdduserComponent},
      { path:'ProfilSortie',component:ProfilSortieComponent},
      { path:'Promo',component:PromoComponent},
      { path:'competence',component:CompetenceComponent},
      { path:'referenciel',component:ReferencielComponent},
      { path:'GroupeCompetence',component:GroupeCompetenceComponent},
      { path:'addPromo',component:AddPromoComponent},
      { path:'addCompetence',component:AddCompetenceComponent},
      { path:'addGroupeCompetence',component:AddGroupeCompetenceComponent},
      { path:'addPS',component:AddProfilSortisComponent},
      { path:'addReferenciel',component:AddRefeferencielComponent},
      { path:'foter',component:FooterComponent}
      
     ],
  },
  {
    path: 'login', component: LoginComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 // providers: [AuthGuard]
})
export class AppRoutingModule { }
