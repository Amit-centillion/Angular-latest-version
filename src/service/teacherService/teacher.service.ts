import { Injectable } from '@angular/core';
import { environment } from "../../environments/environments"
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  public baseUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) { }

  addTeacherData(Data:any){
    return this.httpClient.post(this.baseUrl + `api/Teacher/AddTeacher`,Data);
  }
}
