import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http';
import { AppComponent } from './app.component';

import { LoginComponent } from './entity/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './entity/user/user.component';
import { ProfilComponent } from './entity/profil/profil.component';
import { AuthService } from './auth.service';
import { from } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { InterceptorProvider } from 'src/Interceptor';
import {MatTableModule } from '@angular/material/table';
import { AngularMaterialModule } from 'src/appmateriel.module';
import { AddProfilComponent } from './entity/profil/add-profil/add-profil.component';
import { EditProfilComponent } from './entity/profil/edit-profil/edit-profil.component';
import { AdduserComponent } from './entity/user/adduser/adduser.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateUserComponent } from './entity/user/update-user/update-user.component';
import { ProfilSortieComponent } from './entity/profil-sortie/profil-sortie.component';
import { PromoComponent } from './entity/promo/promo.component';
import { CompetenceComponent } from './entity/competence/competence.component';
import { GroupeCompetenceComponent } from './entity/groupe-competence/groupe-competence.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ProfilComponent,
    AddProfilComponent,
    EditProfilComponent,
    AdduserComponent,
    FooterComponent,
    UpdateUserComponent,
    ProfilSortieComponent,
    PromoComponent,
    CompetenceComponent,
    GroupeCompetenceComponent,
   
  
 
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [InterceptorProvider],
  
  bootstrap: [AppComponent]
})
export class AppModule { }