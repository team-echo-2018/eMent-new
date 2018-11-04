import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpBackendRequestService } from '../../services/http-backend-request.service';
import { Auth } from '../../entities/auth';
import { HttpEnum } from '../../utils/httpEnum';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  providers: [HttpBackendRequestService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor( 
    private httpBackendRequest: HttpBackendRequestService, 
    private router: Router, 
    private authService: AuthenticationService, 
    private userService: UserService ) { }

  ngOnInit() {
    this.authService.isUserLogged();
  }

  submitForm() {
    const authData = new Auth(this.username, this.password);
    this.authService.loginUser(authData);
  }
  
}
