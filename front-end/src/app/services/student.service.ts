import { Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsList: Student[] = new Array();

  constructor(private httpBackendRequest: HttpBackendRequestService) { }

  // get all the students' details
  getStudents() {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETSTUDENTS, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let stud = Utils.convertDatabaseStudentToStudent(result[i]);
              this.studentsList.push(stud);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting companies error occured.. !')
      );
  }

  // insert student details
  insertStudent(student) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETSTUDENTS, student)
      .subscribe(
        (result) => {
          alert("Successfully Student Inserted.");
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );
  }
}
