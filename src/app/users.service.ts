import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient,private modalService: NgbModal) { }

  afficheUser():any
  {
    return this.http.get<any>("/api/admin/users");
  }

  ajoutUser(data: any):Observable  <any>{
    return this.http.post ("/api/admin/users",data)
  }
  updatUser(){
       return this.http.put("/api/admin/users/{id}",DataCue);
  }
  archiveUser(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/user/'}${id}`);
  }
 
}
