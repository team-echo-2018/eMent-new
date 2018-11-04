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

  user: any;

  fname: string;
  lname: string;
  address: string;
  email: string;
  phone: string;
  image: string;
  description: string;


  constructor(
    private authService: AuthenticationService, 
    private userService: UserService ) {  }

  ngOnInit() {
    // if user is not logged, redirect to login page
    this.authService.isUserLogged();
    this.user = this.userService.getCurrentUser();
    console.log(this.user);
    this.fname = this.user.getFirstName();
    this.lname = this.user.getLastName();
    this.address = this.user.getAddress();
    this.email = this.user.getEmail();
    this.phone = this.user.getPhone();
    this.image = this.user.getImgLink();
    this.description = this.user.getDescription();

  }

}
