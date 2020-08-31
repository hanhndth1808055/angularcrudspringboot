"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentService = void 0;
var core_1 = require("@angular/core");
var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        // readonly rootURL = 'http://171.244.141.61:8085/api';
        this.rootURL = 'http://localhost:8080/api';
    }
    StudentService.prototype.postStudent = function (formData) {
        return this.http.post(this.rootURL + '/student', formData);
    };
    StudentService.prototype.refreshList = function () {
        var _this = this;
        this.http.get(this.rootURL + '/student').toPromise().then(function (res) { return _this.list = res; });
    };
    StudentService.prototype.putStudent = function (formData) {
        return this.http.put(this.rootURL + '/student/' + formData.student_id, formData);
    };
    StudentService.prototype.deleteStudent = function (student_id) {
        return this.http["delete"](this.rootURL + '/student/' + student_id);
    };
    StudentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
