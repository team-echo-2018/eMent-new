import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userAuth: User;

  getUser(): User {
    return this.userAuth;
  }

  setUser(userAuth: Object) {
    this.userAuth = Utils.convertDatabaseUserToUser(userAuth);
  }

}
