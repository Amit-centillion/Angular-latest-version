import { Injectable } from '@angular/core';
import { environment } from "../../environments/environments"
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public baseUrl = environment.apiUrl;

  constructor(public httpClient: HttpClient) { }

  addStudentData(Data:any){
    return this.httpClient.post(this.baseUrl + `api/Student/AddStudent`,Data);
  }
  getAllStudentData(){
    return this.httpClient.get(this.baseUrl + `api/Student/GetAllStudents`)
  }
  getAllTeacherData(){
    return this.httpClient.get(this.baseUrl + `api/Teacher/GetAllTeachers`)
  }
}
