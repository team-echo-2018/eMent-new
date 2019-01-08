import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEnum } from '../utils/httpEnum';
import { HttpBackendRequestService } from './http-backend-request.service';
import { Utils } from '../utils/utils';
import { nortification} from '../entities/nortification';


@Injectable({
  providedIn: 'root'
})
export class NortificationService {
  noritfications:nortification[];

  constructor( private httpBackendRequest: HttpBackendRequestService,private Http :HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.noritfications =new Array();
    this.noritfications =this.getnortifications();
  }
  getnortifications(){
    this.noritfications =new Array();
    console.log("get nortifications service called");

    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETNORTIFICATION,null).subscribe(

      (result) => {
        if (result === null) {
          console.log("respond error");
        } else {
          let i = 0;
          while (result[i]) {
            let post = Utils.convertnortificationtonortify(result[i]);
           // console.log(post);

            this.noritfications.push(post);
            i = i + 1;
          }
          console.log(this.noritfications);

        }
      },
      (err) => alert('getting nortifications from nortifications service error occured.. !'+err)
    )
    return this.noritfications;

  }
}
