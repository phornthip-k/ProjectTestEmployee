import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPageComponent } from './page/app-page.component';
import { AddEmployeeComponent } from './page/add/add-employee.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'list' , component: AppPageComponent},
  {path: 'add' , component: AddEmployeeComponent},
  {path: 'edit/:EmpId' , component: AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
