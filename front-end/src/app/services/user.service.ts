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

  currentUser: any;

  sp_user1 = new User();
  sp_student1 = new Student();

  constructor(private httpBackendRequest: HttpBackendRequestService) {
    this.sp_user1.userId = "30";
    this.sp_user1.userName = "Janaka";
    this.sp_user1.userPassword = "Janaka123";
    this.sp_user1.userType = "S";

    this.sp_student1.setId("30");
    this.sp_student1.setFirstName("Janaka");
    this.sp_student1.setLastName("Bandara");
    this.sp_student1.setAddress("");
    this.sp_student1.setEmail("");
    this.sp_student1.setPhone("");
    this.sp_student1.setImgLink("");
    this.sp_student1.setDescription("");
  }

  ngOnInit() {
    this.currentUser = null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

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

  private setUserForStudent(curStudent: Object) {
    this.currentUser = Utils.convertDatabaseStudentToStudent(curStudent);
  }

  private setUserForMentor(curMentor: Object) {
    this.currentUser = Utils.convertDatabaseMentorToMentor(curMentor);
  }

  insertUser(user) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDUSER, user)
      .subscribe(
        (result) => {
          return result;
        },
        (err) => alert('Error occured.. Contact Administrations!')
        // Verificar erro backend > (err) => alert('Ocorreu um erro: ' + err)
      );

  }

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

  updateStudentDetails(student: Student) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATESTUDENT, student)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured.. Contact Administrations!')
        // Verificar erro backend > (err) => alert('Ocorreu um erro: ' + err)
      );
  }

}
