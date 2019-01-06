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

  constructor(private httpBackendRequest: HttpBackendRequestService) { }

  ngOnInit() {
    this.currentUser = null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  setCurrentUser (loggedUser: User ,user: Object) {
    switch(loggedUser.userType){
      case 'S':
        this.setUserForStudent(user);
        break;
      case 'M':
        this.setUserForMentor(user);
        break;
    }
  }

  private setUserForStudent(curStudent: Object) {
    this.currentUser =  Utils.convertDatabaseStudentToStudent(curStudent);
  }

  private setUserForMentor(curMentor: Object) {
    this.currentUser = Utils.convertDatabaseMentorToMentor(curMentor);
  }

  insertUser(user){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDUSER, user)
    .subscribe(
      (result) => {
        return result;
      },
      (err) => alert('Error occured.. Contact Administrations!')
      // Verificar erro backend > (err) => alert('Ocorreu um erro: ' + err)
    );

  }

  updateCurrentUserDetails(loggedUser: User ,user: any) {
    switch(loggedUser.userType){
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
