import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsiteModule } from './adminsite/adminsite.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentService } from './adminsite/shared/student.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorServiceService } from './adminsite/shared/basic-auth-http-interceptor-service.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminsiteModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [StudentService,
  {
    provide: HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorServiceService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
