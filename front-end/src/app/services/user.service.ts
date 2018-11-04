import { Injectable } from '@angular/core';
import { Utils } from '../utils/utils';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;

  constructor() { }

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
        this.setUserForMentor();
        break;
    }
  }

  private setUserForStudent(curStudent: Object) {
    this.currentUser =  Utils.convertDatabaseStudentToStudent(curStudent);
  }

  private setUserForMentor() {

  }

}
