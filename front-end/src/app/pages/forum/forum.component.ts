import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Posts } from '../../entities/posts';
import { Postreply } from '../../entities/postreply';
import { PostserviceService } from '../../services/postservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  posts : Posts[];
  postsreply :Postreply[];
  Postheading:string;
  postbody:string;
  postreply:string;

  constructor(private authService: AuthenticationService,private postService :PostserviceService) { }

  hidden:boolean =false;
  hiddenwrite :boolean =false;

  ngOnInit():void {
    this.authService.isUserLogged();
    this.retrevePosts();
  }

  retrevePosts(){
    this.postService.get_Posts()
          .subscribe(posts => {
            console.log(posts);
            this.posts=posts;
        });
  }


  writecomment(){
    if(this.hiddenwrite){
      this.hiddenwrite =false;
    }else{
      this.hiddenwrite =true;
    }
  }
  comments(pst:Posts){
    if(this.hidden){
      this.hidden =false;
    }else{
      this.hidden =true;
    }
    this.postService.getReplys(pst).subscribe(
      replys =>{
        console.log(replys);
        this.postsreply=replys;

      }

    )};

    addpost(){
      const pst =new Posts();

      pst.postAuthor =this.authService.getUser().userName;
      pst.postbody=this.postbody;
      pst.posttitle=this.Postheading;
      this.postService.addPosts(pst);

    }

    addreply(){
      const reply =new Postreply();


    }

}
