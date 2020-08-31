"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminsiteModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var adminsite_routing_module_1 = require("./adminsite-routing.module");
var adminsite_component_1 = require("./adminsite.component");
var students_component_1 = require("./students/students.component");
var student_component_1 = require("./students/student/student.component");
var student_list_component_1 = require("./students/student-list/student-list.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var slider_1 = require("@angular/material/slider");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var signup_component_1 = require("./signup/signup.component");
var AdminsiteModule = /** @class */ (function () {
    function AdminsiteModule() {
    }
    AdminsiteModule = __decorate([
        core_1.NgModule({
            declarations: [adminsite_component_1.AdminsiteComponent,
                students_component_1.StudentsComponent,
                student_component_1.StudentComponent,
                student_list_component_1.StudentListComponent,
                login_component_1.LoginComponent,
                logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent],
            imports: [
                common_1.CommonModule,
                adminsite_routing_module_1.AdminsiteRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                slider_1.MatSliderModule
            ],
            exports: [
                students_component_1.StudentsComponent
            ]
        })
    ], AdminsiteModule);
    return AdminsiteModule;
}());
exports.AdminsiteModule = AdminsiteModule;
