import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { ReferencielComponent } from './entity/referenciel/referenciel.component';
import { AddPromoComponent } from './entity/promo/add-promo/add-promo.component';
import { AddCompetenceComponent } from './entity/competence/add-competence/add-competence.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AddGroupeCompetenceComponent } from './entity/groupe-competence/add-groupe-competence/add-groupe-competence.component';
import { AddProfilSortisComponent } from './entity/profil-sortie/add-profil-sortis/add-profil-sortis.component';
import { AddRefeferencielComponent } from './entity/referenciel/add-refeferenciel/add-refeferenciel.component';
import { AccuielComponent } from './entity/accuiel/accuiel.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { MatSortModule } from '@angular/material/sort';
import { UpdatProfilSortieComponent } from './entity/profil-sortie/updat-profil-sortie/updat-profil-sortie.component';
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
    ReferencielComponent,
    AddPromoComponent,
    AddCompetenceComponent,
    AddGroupeCompetenceComponent,
    AddProfilSortisComponent,
    AddRefeferencielComponent,
    AccuielComponent,
    UpdatProfilSortieComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    
    
  ],
  providers: [InterceptorProvider],
  
  bootstrap: [AppComponent],
  entryComponents: [ ],
})
export class AppModule { }