import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';

import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http:HttpClient) { 
  }
  affichProfil():any
  {
    return this.http.get<any>("/api/admin/profils").pipe(tap( data =>{
      return data;
    }, err => {}));
  }
  ajoutProfil(data: any):Observable  <any>{
    return this.http.post("/api/admin/profils",data)
  }

  update( data:any): Observable<any> {
    return this.http.put('/api/admin/profils/'+data.id, data);
    }

    ajoutProfilSortie(data: any):Observable  <any>{
      return this.http.post("/api/admin/profilsorties",data)
    }

    affichProfilSortie():any
  {
    return this.http.get<any>("/api/admin/profilsorties").pipe(tap( data =>{
      return data;
    }, err => {}));
  }
  archivePorfilSortie(id: number): Observable<any> {
    return this.http.delete<any>(`${'api/admin/profilsorties/'}${id}`);
  }
}

