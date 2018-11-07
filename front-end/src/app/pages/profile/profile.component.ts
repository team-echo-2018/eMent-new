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
  editable: boolean;
  btnCaption: string;

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

    this.fname = this.user.getFirstName();
    this.lname = this.user.getLastName();
    this.address = this.user.getAddress();
    this.email = this.user.getEmail();
    this.phone = this.user.getPhone();
    this.image = this.user.getImgLink();
    this.description = this.user.getDescription();

    this.editable = true;
    this.btnCaption = "Edit";
  }

  submitForm() {
    if(this.editable) {
      // change to save activating mode
      this.editable = false;
      this.btnCaption = "Save";
    } else {
      // saving the current details
      let authUser = this.authService.getUser();
      let user = this.updatedUserObject();
      this.userService.updateCurrentUserDetails(authUser, user);
      
      // change to edit activating mode
      this.editable = true;
      this.btnCaption = "Edit";
    }
  }

  updatedUserObject(): any {
    let updatedUser = this.userService.getCurrentUser();
    updatedUser.setFirstName(this.fname);
    updatedUser.setLastName(this.lname);
    updatedUser.setAddress(this.address);
    updatedUser.setPhone(this.phone);
    updatedUser.setEmail(this.email);
    updatedUser.setImgLink(this.image);
    updatedUser.setDescription(this.description);
    return updatedUser;
  }
}
