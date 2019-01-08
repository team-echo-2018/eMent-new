import { Injectable } from '@angular/core';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';
import { Mentor } from '../entities/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  mentorsList: Mentor[] = new Array();

  constructor(private httpBackendRequest: HttpBackendRequestService) { }

  // get all the mentors' details
  getMentors() {
    this.mentorsList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETMENTORS, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let ment = Utils.convertDatabaseMentorToMentor(result[i]);
              this.mentorsList.push(ment);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting companies error occured.. !')
      );
  }
}
