import { Routes } from '@angular/router';
import { EmployeeLisComponent } from './employee-lis/employee-lis.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employees', component: EmployeeLisComponent },
];
