import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenceServeService {
data:any
  constructor(private http:HttpClient) { }

  ajoutCompetence(data: any):Observable  <any>{
    return this.http.post("/api/admin/competences",data)
  }


  affichGroupCompetence():Observable  <any>{
    return this.http.get("/api/admin/grpecompetences")
  }
}
