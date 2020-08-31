import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData: Student;
  // readonly rootURL = 'http://171.244.141.61:8085/api';
  readonly rootURL = 'http://localhost:8080/api';
  list: Student[];

  constructor(private http: HttpClient) { }

  postStudent(formData: Student) {
    return this.http.post(this.rootURL + '/student', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/student').toPromise().then(res => this.list = res as Student[]);
  }

  putStudent(formData: Student) {
    return this.http.put(this.rootURL + '/student/' + formData.student_id, formData);
  }

  deleteStudent(student_id: number) {
    return this.http.delete(this.rootURL + '/student/' + student_id);
  }
}
