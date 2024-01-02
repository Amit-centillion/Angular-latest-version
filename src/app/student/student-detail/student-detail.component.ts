import { Component } from '@angular/core';
import { StudentService } from '../../../service/studentService/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  studentList:any = [];
  
  constructor(private studentService:StudentService, private toastr: ToastrService){

  }
  ngOnInit(){
    this.onLoadStudentData();
  }
  onLoadStudentData(){
    this.studentService.getAllStudentData().subscribe((data)=>{
      this.studentList = data;
      this.toastr.success('Students get successfully');
    })
  }
  addTextBox(student: any) {
    debugger
    student.showTextBox = !student.showTextBox;
    
    console.log('student?.firstName',this.studentList )
  }
}
