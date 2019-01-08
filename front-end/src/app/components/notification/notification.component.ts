import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NortificationService } from '../../services/nortification.service';
import { from } from 'rxjs';
import { nortification } from 'src/app/entities/nortification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  nortification_list:nortification[];
  constructor(private authService:AuthenticationService ,private nortservice:NortificationService) { }

  ngOnInit() {
    this.nortification_list =this.nortservice.getnortifications();
  }

  isJanaka() {
    return this.authService.getUser().userName == "Janaka";
  }
}
