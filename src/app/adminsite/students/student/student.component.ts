import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { NgForm, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(
    private service: StudentService,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm();
    if (!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(['adminsite/login']);
    }
  }

  resetForm(form?: NgForm) {
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
  }

  onSubmit(form: NgForm) {
    if (form.value.student_id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

  }

  insertRecord(form: NgForm) {
    this.service.postStudent(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully!', 'ST. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    if (confirm('Are you sure to update this record?')) {
      this.service.putStudent(form.value).subscribe(res => {
        this.toastr.info('Updated successfully!', 'ST. Update');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  }
}
