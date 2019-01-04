import { Component, OnInit } from '@angular/core';

import { HttpBackendRequestService } from '../../services/http-backend-request.service';
import { Auth } from '../../entities/auth';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  providers: [HttpBackendRequestService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.isUserLogged();
  }

  submitForm() {
    const authData = new Auth(this.username, this.password);
    this.authService.loginUser(authData);
  }

}
