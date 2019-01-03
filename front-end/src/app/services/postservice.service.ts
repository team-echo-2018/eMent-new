import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../entities/posts';
import { HttpEnum } from '../utils/httpEnum';
import { HttpBackendRequestService } from './http-backend-request.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor( private httpBackendRequest: HttpBackendRequestService) { }

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
  deletePosts(Postdetails:Posts){
    this.httpBackendRequest.realizarHttpPost(HttpEnum.BASEURL+"deletePost",Postdetails).subscribe(
      (error)=>{
        console.log("porblem deleting posts");

      }

    )
  }


}
