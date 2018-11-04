import { Component, OnInit } from '@angular/core';

import { HttpBackendRequestService } from '../../services/http-backend-request.service';
import { User } from '../../entities/user';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(
    private httpBackendRequest: HttpBackendRequestService, 
    private authService: AuthenticationService, 
    private userService: UserService ) {  }

  ngOnInit() {
    // if user is not logged, redirect to login page
    this.authService.isUserLogged();
  }

}
