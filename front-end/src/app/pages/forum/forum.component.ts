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
  author:string;
  type:boolean;

  constructor(private authService: AuthenticationService,private postService :PostserviceService) { }

  hidden:boolean =false;
  hiddenwrite :boolean =false;

  ngOnInit():void {
    this.authService.isUserLogged();
    this.retrevePosts();

    this.type =(this.authService.getUser().userType==='A');
  }

  retrevePosts(){
    this.postService.getPosts();
    this.author =this.authService.getUser().userName;
    this.posts =this.postService.postlist;
    console.log(this.posts);

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
    this.postService.getPostsreply(pst);
    this.postsreply=this.postService.replylist;
    console.log(this.postreply);

    };

    addpost(){
      const pst =new Posts();

      pst.postAuthor =this.author;
      pst.postbody=this.postbody;
      pst.posttitle=this.Postheading;
      this.posts.push(pst);
      this.postService.InsertPosts(pst);
      console.log(pst+"added");


    }

    addreply(pst:Posts){
      const rep =new Postreply();
      rep.Author=this.author;
      rep.body=this.postreply;
      rep.replyid=null;
      rep.postId =pst.postId;
      console.log(rep.body);
      this.postsreply.push(rep);
      this.postService.InsertReplys(rep);

    }

    deletecomments(post:Posts){
      this.postService.deletePosts(post);
    }

}
