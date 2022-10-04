import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { GetAllNotesComponent } from './Components/get-all-notes/get-all-notes.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { IconsComponent } from './Components/icons/icons.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ReminderComponent } from './Components/reminder/reminder.component';
import { EditLabelsComponent } from './Components/edit-labels/edit-labels.component';
import { UpdateComponent } from './Components/update/update.component';
import { AuthguardServiceService } from './Services/authService/authguard-service.service';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetAllNotesComponent,
    DisplayNoteComponent,
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    ReminderComponent,
    EditLabelsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
