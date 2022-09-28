import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './Components/archive/archive.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditLabelsComponent } from './Components/edit-labels/edit-labels.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ReminderComponent } from './Components/reminder/reminder.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashComponent } from './Components/trash/trash.component';

const routes: Routes = [
  {path:"signup",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"forgetPassword",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
      {path:'notes',component:GetAllNotesComponent},
      {path:'reminder',component:ReminderComponent},
      {path:'editLabels',component:EditLabelsComponent},
      {path:'archive',component:ArchiveComponent},
      {path:'trash',component:TrashComponent}
    ]    
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
