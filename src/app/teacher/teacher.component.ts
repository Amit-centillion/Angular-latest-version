import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeacherService } from '../../service/teacherService/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss'
})
export class TeacherComponent {
  initform: FormGroup | any;
  constructor(private teacherService : TeacherService){

  }
  ngOnInit() { 
    this.teacherForm(); 
  }

  teacherForm() { 
    this.initform = new FormGroup({
      firstName: new FormControl(),
      lastName:new FormControl(),
      dateofBirth: new FormControl(),
      gender:new FormControl(),
      contactNumber: new FormControl(),
      address: new FormControl()
    });
  }
  OnClickButton(){
    this.teacherService.addTeacherData(this.initform.value).subscribe(()=>{

    })
    console.log('this.initform.value', this.initform.value)
  }
}
