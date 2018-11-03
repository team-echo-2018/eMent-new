import { Component, OnInit } from '@angular/core';

import { HttpBackendRequestService } from '../../services/http-backend-request.service';
import { HttpEnum } from '../../utils/httpEnum';
import { User } from '../../entities/user';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private router:Router, private httpBackendRequest: HttpBackendRequestService, private authService: AuthenticationService) {  }

  ngOnInit() {
    this.authService.isUserLogged();
  }

  testStd() {
    this.user = this.authService.getUser();

    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETSTUDENT, this.user)
    .subscribe(
      (result) => {
        if (result === null) {
          alert('error.');
        } else {
          // this.authService.setUser(result);
          console.log(result);
        }
      },
      (err) => alert('Error occured.. Contact Administrations!')
      // Verificar erro backend > (err) => alert('Ocorreu um erro: ' + err)
    );
  }

}
