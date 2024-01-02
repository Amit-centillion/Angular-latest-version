import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from "../../service/studentService/student.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'] 
})
export class StudentComponent implements OnInit { 
  initform: FormGroup | any;
  isSave: boolean = false;
  constructor(private StudentService: StudentService, private toastr: ToastrService){
  }
  get firstName(){
    return this.initform.get('firstName')
  }
  get lastName(){
    return this.initform.get('lastName')
  }
  get dateofBirth(){
    return this.initform.get('dateofBirth')
  }
  get gender(){
    return this.initform.get('gender')
  }
  get contactNumber(){
    return this.initform.get('contactNumber')
  }
  get address(){
    return this.initform.get('address')
  }
  
  ngOnInit() { 
    this.studentForm(); 
  }

  studentForm() { 
    this.initform = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dateofBirth: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      contactNumber: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    });
  }
  OnClickButton(){
    if(!this.initform.valid){
      this.isSave = true
      console.log("form is invalid")
    }else{
      this.StudentService.addStudentData(this.initform.value).subscribe((data)=>{
        this.toastr.success('Student added successfully');
        this.studentForm();
      })
    }
  }
  // studentList: any;
  // studentForm: FormGroup | any;
  // storeId:any;
  // constructor(private fb: FormBuilder, private studentService: StudentService) {}
  
  // ngOnInit() {
  //   this.onLoadStudentData();
  // }
  
  // onLoadStudentData() {
  //   this.studentService.getAllStudentData().subscribe((data: any) => {
  //     this.studentList = data.map((student: any) => ({
  //       ...student,
  //       showTextBox: false,
  //       additionalInfo: ''
  //     }));
  // setTimeout(() => {
  //   this.initializeForm();
  // }, 500);
  //   });
  // }
  
  // initializeForm() {
  //   const formControls: { [key: string]: FormControl } = {};
  //   let data = this.studentList.find((x:any)=>x.id === this.storeId);
  //   formControls[data.firstName.toString()] = new FormControl(null);
  //   this.studentForm = this.fb.group(formControls);
  // }
  
  // addTextBox(student: any,data:any) {
  //   console.log('data', data)
  //   this.storeId = data;
  //   student.showTextBox = !student.showTextBox;
  //   this.initializeForm();
  // }

  // onclick(){
  //   console.log('this.studentForm.value', this.studentForm.value)
  // }
}
