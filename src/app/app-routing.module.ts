import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { ProfilComponent } from './profil/profil.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 
  {path:'' ,component:LoginComponent},
  {path:'listerProfil',component:ProfilComponent},
  {path:'listerUser',component:UserComponent},
  { path:'pageDaccuiel',component:FooterComponent},
  {path:'add-profil',component:AddProfilComponent},
  { path :'editProfil',component:EditProfilComponent},
  { path :'addUser' ,component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
