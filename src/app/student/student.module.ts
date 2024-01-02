import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from '../teacher/teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../service/studentService/student.service';
import { TeacherService } from '../../service/teacherService/teacher.service';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduledComponent } from '../scheduled/scheduled.component';

const routes: Routes = [
    {
      path: '',
      component: NavBarComponent,
    },
  ];
  
@NgModule({
    declarations: [
        StudentComponent,
        NavBarComponent,
        TeacherComponent,
        StudentDetailComponent,
        ScheduledComponent
    ],
    imports:[
      NgbModule,
      HttpClientModule,
      CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),  
    ToastrModule.forRoot(),
    ],
    providers: [StudentService,TeacherService,ToastrService],
})
export class studentModule { }
