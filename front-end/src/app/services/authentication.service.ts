import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userAuth: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userAuth = null;
  }

  getUser(): User {
    return this.userAuth;
  }

  setUser(userAuth: Object) {
    this.userAuth = Utils.convertDatabaseUserToUser(userAuth);
  }

  isUserLogged() {
    if (!this.userAuth) {
      alert('User should be logged.');
      this.router.navigate(['/login']);
    }
  }

}
