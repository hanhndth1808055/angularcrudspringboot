import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../shared/student.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(
    private service: StudentService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(st: Student) {
    this.service.formData = Object.assign({}, st);
  }

  onDelete(student_id: number) {
    this.service.deleteStudent(student_id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully!', 'ST. Delete');
    });
  }
}
