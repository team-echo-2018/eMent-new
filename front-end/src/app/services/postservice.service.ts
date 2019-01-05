import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../entities/posts';
import { HttpEnum } from '../utils/httpEnum';
import { HttpBackendRequestService } from './http-backend-request.service';
import { Postreply } from '../entities/postreply';
import { Utils } from '../utils/utils';
import { post } from 'selenium-webdriver/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  private getPostsUrl =HttpEnum.BASEURL+"api/posts/getPost";
  private insertPostsUrl =HttpEnum.BASEURL +"api/posts/insertPost";
  private deletePostsUrl =HttpEnum.BASEURL +"api/posts/deletePost";
  private getreplyUrl =HttpEnum.BASEURL +"api/posts/getPostReply";
  private insertreplyUrl =HttpEnum.BASEURL+"api/posts/insertReply";

  postlist:Posts[] =new Array();
  replylist:Postreply[] =new  Array();

  constructor( private httpBackendRequest: HttpBackendRequestService,private Http :HttpClient) { }

  /* THE NEW CONTROLLER SERVICES FOR THE FORUM POSTS BACKEND  */
  /* GET ALL POSTS */
  // get_Posts (): Observable<Posts[]> {
  //   return this.Http.get<Posts[]>(this.getPostsUrl);
  // }
  // /* GET ALL REPLYS */

  // getReplys (posts: Posts): Observable<Postreply[]> {
  //   return this.Http.post<Postreply[]>(this.getreplyUrl,httpOptions);
  // }

  // addPosts (posts: Posts): Observable<Posts> {
  //   console.log("addpost called");
  //   return this.Http.post<Posts>(this.insertPostsUrl, posts, httpOptions);
  // }

  // addReply (replyposts: Postreply): Observable<Postreply> {
  //   return this.Http.post<Postreply>(this.insertreplyUrl, replyposts, httpOptions);
  // }
  // deleteposts (posts: Posts): Observable<Posts> {
  //   return this.Http.post<Posts>(this.deletePostsUrl, httpOptions);
  // }



  /* GET POSTS */

/* GET REPLY FOR POSTS */

  getPosts():Posts[]{
    console.log("posts service called");

    this.httpBackendRequest.realizarHttpPost(this.getPostsUrl,null).subscribe(

      (result) => {
        if (result === null) {
          console.log("respond error");
        } else {
          let i = 0;
          while (result[i]) {
            let post = Utils.convertDatabasereplytoPosts(result[i]);
            this.postlist.push(post);
            i = i + 1;
          }
          //console.log(this.postlist);

        }
      },
      (err) => alert('getting Posts error occured.. !')
    )
    return this.postlist;
  }
  //get replys
  getPostsreply(postdetails:Posts):Postreply[]{
    console.log("get reply called");

    this.replylist =new Array();
    this.httpBackendRequest.realizarHttpPost(this.getreplyUrl,postdetails).subscribe(
      (result) => {
        if (result === null) {
          console.log("respond error");
        } else {
          let i = 0;
          while (result[i]) {
            let rep = Utils.convertDatabasetoPostsreply(result[i]);
            this.replylist.push(rep);
            i = i + 1;
          }
        }
      },
      (err) => alert('getting Posts error occured.. !')
    )
    return this.replylist;
  }


/* DELETE POSTS */

  deletePosts(Postdetails:Posts){
    this.httpBackendRequest.realizarHttpPost(this.deletePostsUrl,Postdetails).subscribe(
      (error)=>{
        console.log("problem deleting posts");

      }

    )
  }
/* INSERT POSTS */
  InsertPosts(Postdetails:Posts){
    this.httpBackendRequest.realizarHttpPost(this.insertPostsUrl,Postdetails).subscribe(
      (error)=>{
        console.log("problem inserting posts");

      }

    )
  }
  /* INSERT REPLYS */

  InsertReplys(ReplyDetails:Postreply){
    this.httpBackendRequest.realizarHttpPost(this.insertreplyUrl,ReplyDetails).subscribe(
      (error)=>{
        console.log("error in inserting replys to system");

      }
    )
  }


}
