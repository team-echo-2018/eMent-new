import { Injectable } from '@angular/core';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Company } from '../entities/company';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companiesList: Company[] = new Array();

  constructor(private httpBackendRequest: HttpBackendRequestService) { }

  // get all the companies' details
  getCompanies() {
    this.companiesList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETCOMPANIES, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let comp = Utils.convertDatabaseCompanyToCompany(result[i]);
              this.companiesList.push(comp);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting companies error occured.. !')
      );
  }

  // Delete company from database
  deleteCompany(company: Company) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELETECOMPANY, company)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );
  }
}
