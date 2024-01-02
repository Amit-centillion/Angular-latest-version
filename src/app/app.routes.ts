import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'student',
        loadChildren: () =>
        import('./student/student.module').then((m) => m.studentModule),
      }
];
 