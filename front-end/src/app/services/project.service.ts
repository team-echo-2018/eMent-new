import { Injectable } from '@angular/core';
import { Project } from '../entities/project';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectsList: Project[] = new Array();
  constructor(private httpBackendRequest: HttpBackendRequestService) { }

  // get all the companies' details
  getCompanies() {
    this.projectsList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETPROJECTS, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let prj = Utils.convertDatabaseProjectToProject(result[i]);
              this.projectsList.push(prj);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting projects error occured.. !')
      );
  }


  // get project by project name 
  getProjectByName(project) {
    this.projectsList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETCOMPANYBYNAME, project)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            console.log(result);
            while (result[i]) {
              let prj = Utils.convertDatabaseProjectToProject(result[i]);
              this.projectsList.push(prj);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting project error occured.. !')
      );
  }

}
