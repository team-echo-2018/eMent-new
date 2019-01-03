import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Posts } from '../../entities/posts';
import { Postreply } from '../../entities/postreply';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  hidden:boolean =true;

  ngOnInit() {
    this.authService.isUserLogged();
  }
  comments(){
    if(this.hidden){
      this.hidden =false;
    }else{
      this.hidden =true;
    }
  }

}
