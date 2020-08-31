"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminsiteRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var adminsite_component_1 = require("./adminsite.component");
var students_component_1 = require("./students/students.component");
var student_list_component_1 = require("./students/student-list/student-list.component");
var student_component_1 = require("./students/student/student.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var auth_guard_service_1 = require("./shared/auth-guard.service");
var routes = [{ path: '', component: adminsite_component_1.AdminsiteComponent },
    { path: 'students', component: students_component_1.StudentsComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'student-list', component: student_list_component_1.StudentListComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'student', component: student_component_1.StudentComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
var AdminsiteRoutingModule = /** @class */ (function () {
    function AdminsiteRoutingModule() {
    }
    AdminsiteRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AdminsiteRoutingModule);
    return AdminsiteRoutingModule;
}());
exports.AdminsiteRoutingModule = AdminsiteRoutingModule;
