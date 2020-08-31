import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminsiteComponent } from './adminsite.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentComponent } from './students/student/student.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './shared/auth-guard.service';

const routes: Routes = [{ path: '', component: AdminsiteComponent },
{ path: 'students', component: StudentsComponent, canActivate: [AuthGuardService] },
{ path: 'student-list', component: StudentListComponent, canActivate: [AuthGuardService] },
{ path: 'student', component: StudentComponent, canActivate: [AuthGuardService] },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsiteRoutingModule { }
