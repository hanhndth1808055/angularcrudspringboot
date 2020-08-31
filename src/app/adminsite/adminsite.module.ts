import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsiteRoutingModule } from './adminsite-routing.module';
import { AdminsiteComponent } from './adminsite.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AdminsiteComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent],
  imports: [
    CommonModule,
    AdminsiteRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class AdminsiteModule { }
