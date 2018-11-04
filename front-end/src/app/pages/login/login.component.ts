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
    private authService: AuthenticationService, private userService: UserService ) { }

  ngOnInit() {
  }

  submitForm() {
    const authData = new Auth(this.username, this.password);
    this.httpBackendRequest.realizarHttpPost(HttpEnum.AUTH, authData)
    .subscribe(
      (result) => {
        if (result === null) {
          alert('Login credentials are not correct.');
        } else {
          this.authService.setUser(result);
          this.setCurrentUserObject();
          console.log("Login credentials ok")
          this.router.navigate(['/home']);
        }
      },
      (err) => alert('Error occured.. Contact Administrations!')
      // Verificar erro backend > (err) => alert('Ocorreu um erro: ' + err)
    );
  }

  setCurrentUserObject() {
    let user = this.authService.getUser();
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETSTUDENT, user)
    .subscribe(
      (result) => {
        if (result === null) {
          alert('error.');
        } else {
          this.userService.setCurrentUser(result);
        }
      },
      (err) => alert('Error occured.. Contact Administrations!')
    );
  }
  
}
