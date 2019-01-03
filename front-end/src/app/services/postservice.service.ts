import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../entities/posts';
import { HttpEnum } from '../utils/httpEnum';
import { HttpBackendRequestService } from './http-backend-request.service';
import { Postreply } from '../entities/postreply';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor( private httpBackendRequest: HttpBackendRequestService) { }

  /* GET POSTS */
  getPosts(){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL +"getPost",null).subscribe(
      (results)=>{
        if(results ==null){
          console.log("error in getting posts --no posts");

        }else{
          return results;
        }

      }
    )
  }

/* GET REPLY FOR POSTS */

  getPostsreply(){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL +"getPostReply",null).subscribe(
      (results)=>{
        if(results ==null){
          console.log("error in getting posts --no posts");

        }else{
          return results;
        }

      }
    )
  }


/* DELETE POSTS */

  deletePosts(Postdetails:Posts){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL+"deletePost",Postdetails).subscribe(
      (error)=>{
        console.log("problem deleting posts");

      }

    )
  }
/* INSERT POSTS */
  InsertPosts(Postdetails:Posts){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL+"insertPost",Postdetails).subscribe(
      (error)=>{
        console.log("problem inserting posts");

      }

    )
  }
  /* INSERT REPLY */

  InsertReplys(ReplyDetails:Postreply){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL+"insertReply",ReplyDetails).subscribe(
      (error)=>{
        console.log("error in inserting replys to system");

      }
    )
  }


}
