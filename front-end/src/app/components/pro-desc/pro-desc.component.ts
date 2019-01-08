import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpEnum } from '../../utils/httpEnum';

@Component({
  selector: 'app-pro-desc',
  templateUrl: './pro-desc.component.html',
  styleUrls: ['./pro-desc.component.css']
})
export class ProDescComponent implements OnInit {

  user: any;

  fname: string;
  lname: string;
  address: string;
  email: string;
  phone: string;
  image: string;
  description: string;

  imageAddress: string;

  rating: number;
  stars: number[];

  constructor(private authService: AuthenticationService,
    private userService: UserService) { }

  ngOnInit() {
    // if user is not logged, redirect to login page
    this.authService.isUserLogged();

    // if user is logged, get the current user
    this.user = this.userService.getCurrentUser();

    this.fname = this.user.getFirstName();
    this.lname = this.user.getLastName();
    this.address = this.user.getAddress();
    this.email = this.user.getEmail();
    this.phone = this.user.getPhone();
    this.image = this.user.getImgLink();
    if (this.image == null || this.image == "") {
      this.image = "default.jpg";
    }
    this.description = this.user.getDescription();

    this.imageAddress = HttpEnum.BASEURL + this.image;

    this.rating = 4.8;
    this.stars = Array(Math.round(this.rating));
    // console.log(this.user);
  }

  isSachintha() {
    return this.authService.getUser().userName == "Sachintha";
  }

}
