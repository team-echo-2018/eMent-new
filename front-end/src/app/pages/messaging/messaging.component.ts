import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor(private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    this.authService.isUserLogged();
    console.log(this.userService.getCurrentUser());
  }

}
