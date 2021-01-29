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
import { AuthGuard } from './service/auth/auth.guard';
import { AccuielComponent } from './entity/accuiel/accuiel.component';

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
         redirectTo:'accuil',
         pathMatch:'full'
       },
     
      { path:'' ,component:LoginComponent},
      { path:'listerProfil',component:ProfilComponent ,canActivate:[AuthGuard]},
      { path:'listerUser',component:UserComponent ,canActivate:[AuthGuard]},
      { path:'pageDaccuiel',component:FooterComponent},
      { path:'add-profil',component:AddProfilComponent,canActivate:[AuthGuard]},
      { path:'editProfil',component:EditProfilComponent,canActivate:[AuthGuard]},
      { path:'addUser' ,component:AdduserComponent,canActivate:[AuthGuard]},
      { path:'ProfilSortie',component:ProfilSortieComponent,canActivate:[AuthGuard]},
      { path:'Promo',component:PromoComponent,canActivate:[AuthGuard]},
      { path:'competence',component:CompetenceComponent,canActivate:[AuthGuard]},
      { path:'referenciel',component:ReferencielComponent,canActivate:[AuthGuard]},
      { path:'GroupeCompetence',component:GroupeCompetenceComponent,canActivate:[AuthGuard]},
      { path:'addPromo',component:AddPromoComponent,canActivate:[AuthGuard]},
      { path:'addCompetence',component:AddCompetenceComponent,canActivate:[AuthGuard]},
      { path:'addGroupeCompetence',component:AddGroupeCompetenceComponent,canActivate:[AuthGuard]},
      { path:'addPS',component:AddProfilSortisComponent,canActivate:[AuthGuard]},
      { path:'addReferenciel',component:AddRefeferencielComponent,canActivate:[AuthGuard]},
      { path:'foter',component:FooterComponent,canActivate:[AuthGuard]},
      { path:'accuil',component:AccuielComponent,canActivate:[AuthGuard]},
      
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
