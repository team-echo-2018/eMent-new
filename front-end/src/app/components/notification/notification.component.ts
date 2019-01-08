import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NortificationService } from '../../services/nortification.service';
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
    this.getnortifications();
    //this.nortification_list =this.nortservice.getnortifications();
    //console.log("nortification component");

    //console.log(this.nortification_list);

  }
  getnortifications(){
    this.nortification_list=new Array();
    this.nortification_list =this.nortservice.getnortifications();
  }

}
