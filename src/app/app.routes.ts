import { Routes } from '@angular/router';
import { FormControlsAndValidationsComponent } from './Components/form-controls-and-validations/form-controls-and-validations.component';
import { FormGroupsComponent } from './Components/form-groups/form-groups.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormArraysComponent } from './Components/form-arrays/form-arrays.component';

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
    path: 'form-arrays',
    component: FormArraysComponent,
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
