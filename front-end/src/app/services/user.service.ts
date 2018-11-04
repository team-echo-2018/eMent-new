import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: any;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.currentUser = null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  setCurrentUser (user: Object) {
    let authUser = this.authService.getUser();
    if(!authUser) {
      console.log("err : user has not logged.");
    } else {
      switch(this.authService.getLoggedUserType()){
        case 'S':
          this.setUserForStudent(user);
          break;
        case 'M':
          this.setUserForMentor();
          break;
      }
    }
  }

  private setUserForStudent(curStudent: Object) {
    this.currentUser =  Utils.convertDatabaseStudentToStudent(curStudent);
  }

  private setUserForMentor() {

  }

}
