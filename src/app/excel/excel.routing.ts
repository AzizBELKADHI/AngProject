import { Routes } from '@angular/router';

import { ExcelComponent } from './excel.component';

export const ExcelRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ExcelComponent
    }]
}
];
