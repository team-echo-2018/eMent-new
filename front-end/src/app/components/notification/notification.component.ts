import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
  }

  isJanaka() {
    return this.authService.getUser().userName == "Janaka";
  }
}
