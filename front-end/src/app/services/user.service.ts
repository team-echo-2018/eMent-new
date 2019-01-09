import { Injectable } from '@angular/core';
import { Utils } from '../utils/utils';
import { User } from '../entities/user';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Current user variable
  currentUser: any;


  constructor(private httpBackendRequest: HttpBackendRequestService) {
  }


  ngOnInit() {
    // Set current user to null
    this.currentUser = null;
  }

  // Get current user
  getCurrentUser(): any {
    return this.currentUser;
  }

  // Set current user to Object model
  setCurrentUser(loggedUser: User, user: Object) {
    switch (loggedUser.userType) {
      case 'S':
        this.setUserForStudent(user);
        break;
      case 'M':
        this.setUserForMentor(user);
        break;
    }
  }

  // Set user details for a student
  private setUserForStudent(curStudent: Object) {
    this.currentUser = Utils.convertDatabaseStudentToStudent(curStudent);
  }

  // Set user details for a mentor
  private setUserForMentor(curMentor: Object) {
    this.currentUser = Utils.convertDatabaseMentorToMentor(curMentor);
  }

  // Insert user to database
  insertUser(user) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDUSER, user)
      .subscribe(
        (result) => {
          return result;
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );

  }

  // Update current user details
  updateCurrentUserDetails(loggedUser: User, user: any) {
    switch (loggedUser.userType) {
      case 'S':
        this.updateStudentDetails(user);
        break;
      case 'M':
        this.setUserForMentor(user);
        break;
    }
  }

  // Update student details
  private updateStudentDetails(student: Student) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATESTUDENT, student)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );
  }

  // Delete user from database
  deleteUser(user: User) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELETEUSER, user)
    .subscribe(
      (result) => {
        alert(result);
      },
      (err) => alert('Error occured.. Contact Administrations!')
    );
  }

}
