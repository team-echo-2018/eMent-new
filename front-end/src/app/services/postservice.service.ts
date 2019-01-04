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
  private getPostsUrl =HttpEnum.BASEURL+"posts/getPost";
  private insertPostsUrl =HttpEnum.BASEURL +"posts/insertPost";
  private deletePostsUrl =HttpEnum.BASEURL +"posts/deletePost";
  private getreplyUrl =HttpEnum.BASEURL +"posts/getPostReply";
  private insertreplyUrl =HttpEnum.BASEURL+"posts/insertReply";

  constructor( private httpBackendRequest: HttpBackendRequestService,private Http :HttpClient) { }

  /* THE NEW CONTROLLER SERVICES FOR THE FORUM POSTS BACKEND  */
  /* GET ALL POSTS */
  get_Posts (): Observable<Posts[]> {
    return this.Http.get<Posts[]>(this.getPostsUrl);
  }
  /* GET ALL REPLYS */

  getReplys (posts: Posts): Observable<Postreply[]> {
    return this.Http.post<Postreply[]>(this.getreplyUrl,httpOptions);
  }

  addPosts (posts: Posts): Observable<Posts> {
    console.log("addpost called");
    return this.Http.post<Posts>(this.insertPostsUrl, posts, httpOptions);
  }

  addReply (replyposts: Postreply): Observable<Postreply> {
    return this.Http.post<Postreply>(this.insertreplyUrl, replyposts, httpOptions);
  }
  deleteposts (posts: Posts): Observable<Posts> {
    return this.Http.post<Posts>(this.deletePostsUrl, httpOptions);
  }



  /* GET POSTS */

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
  /* INSERT REPLYS */

  InsertReplys(ReplyDetails:Postreply){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL+"insertReply",ReplyDetails).subscribe(
      (error)=>{
        console.log("error in inserting replys to system");

      }
    )
  }


}
