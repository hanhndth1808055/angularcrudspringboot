"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentComponent = void 0;
var core_1 = require("@angular/core");
var StudentComponent = /** @class */ (function () {
    function StudentComponent(service, toastr, authenticationService, router) {
        this.service = service;
        this.toastr = toastr;
        this.authenticationService = authenticationService;
        this.router = router;
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.resetForm();
        if (!this.authenticationService.isUserLoggedIn()) {
            this.router.navigate(['adminsite/login']);
        }
    };
    StudentComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            student_id: null,
            name: '',
            age: null,
            gender: '',
            address: ''
        };
    };
    StudentComponent.prototype.onSubmit = function (form) {
        if (form.value.student_id == null) {
            this.insertRecord(form);
        }
        else {
            this.updateRecord(form);
        }
    };
    StudentComponent.prototype.insertRecord = function (form) {
        var _this = this;
        this.service.postStudent(form.value).subscribe(function (res) {
            _this.toastr.success('Inserted successfully!', 'ST. Register');
            _this.resetForm(form);
            _this.service.refreshList();
        });
    };
    StudentComponent.prototype.updateRecord = function (form) {
        var _this = this;
        if (confirm('Are you sure to update this record?')) {
            this.service.putStudent(form.value).subscribe(function (res) {
                _this.toastr.info('Updated successfully!', 'ST. Update');
                _this.resetForm(form);
                _this.service.refreshList();
            });
        }
    };
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'app-student',
            templateUrl: './student.component.html',
            styleUrls: ['./student.component.scss']
        })
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
