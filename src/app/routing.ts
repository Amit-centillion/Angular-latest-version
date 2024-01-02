import { Routes } from '@angular/router';

const Routing: Routes = [
    {
        path: '',
        data: {id:7},
        loadChildren: () =>
          import('./student/student.module').then((m) => m.studentModule),
    },
];
export { Routing };
