import { Component } from '@angular/core';
import { StudentService } from '../../service/studentService/student.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrl: './scheduled.component.scss'
})
export class ScheduledComponent {
  studentDetail:any;
  initform: FormGroup | any;
  isSave: boolean = false;
  teacherList:any = [];
  constructor(private StudentService: StudentService, private toastr: ToastrService){
  }
  // get firstName(){
  //   return this.initform.get('firstName')
  // }
  // get lastName(){
  //   return this.initform.get('lastName')
  // }
  // get dateofBirth(){
  //   return this.initform.get('dateofBirth')
  // }
  // get gender(){
  //   return this.initform.get('gender')
  // }
  // get contactNumber(){
  //   return this.initform.get('contactNumber')
  // }
  // get address(){
  //   return this.initform.get('address')
  // }
  ngOnInit() { 
    this.scheduledForm(); 
    this.getAllStudent();
    this.getAllTeacher();
  }
  getAllStudent(){
   this.StudentService.getAllStudentData().subscribe((data)=>{
    this.studentDetail = data;
   }) 
  }
  getAllTeacher(){
    this.StudentService.getAllTeacherData().subscribe((data)=>{
      this.teacherList = data;
    })
  }
  scheduledForm() { 
    this.initform = new FormGroup({
      student_id: new FormControl(null, Validators.required),
      teacher_id: new FormControl(null)
    });
  }
  OnClickButton(){
    console.log("this from",this.initform.value)
  //   if(!this.initform.valid){
  //     this.isSave = true
  //     console.log("form is invalid")
  //   }else{
  //     this.StudentService.addStudentData(this.initform.value).subscribe((data)=>{
  //       this.toastr.success('Student added successfully');
  //       this.scheduledForm();
  //     })
  //   }
   }
}
