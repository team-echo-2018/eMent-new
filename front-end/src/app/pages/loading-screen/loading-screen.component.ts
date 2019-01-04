import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  userAuth: any;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    // if user is not logged, redirect to login page
    this.authService.isUserLogged();

    this.userAuth = this.authService.getUser();

  }

  ngAfterViewInit() {

    setTimeout(() => {
      if (this.userAuth.userType == 'S' || this.userAuth.userType == 'M') {
        this.router.navigate(['/home']);
      } else if (this.userAuth.userType == 'A') {
        this.router.navigate(['/admin-panel']);
      }
    }, 4000);

    
  }

}
