import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    return this.http.post ("api/admin/users",data)
  }
  getUser_by_id(id:number){
    return this.http.get<any>(`${'api/admin/users/'}${id}`);
  }
  updatUser(id:number,DataCue:any){
       return this.http.post(`${'api/admin/users/'}${id}`, DataCue);

  }
  archiveUser(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/user/'}${id}`);
  }
 
}
