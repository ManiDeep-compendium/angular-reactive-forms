import { Routes } from '@angular/router';
import { FormControlsAndValidationsComponent } from './Components/form-controls-and-validations/form-controls-and-validations.component';
import { FormGroupsComponent } from './Components/form-groups/form-groups.component';

export const routes: Routes = [
  {
    path: 'form-controls',
    component: FormControlsAndValidationsComponent,
  },
  {
    path: 'form-groups',
    component: FormGroupsComponent,
  },
  {
    path: '',
    redirectTo: '/form-controls',
    pathMatch: 'full',
  },
];
