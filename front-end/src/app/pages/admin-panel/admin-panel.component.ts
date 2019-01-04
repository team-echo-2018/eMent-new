import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../entities/company';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  dashboardActive:boolean;
  companiesActive: boolean;
  mentorsActive:boolean;
  studentsActive: boolean;
  notificationsActive:boolean;
  title: string;

  companyList: Company[];

  constructor(private authService: AuthenticationService,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.activateDashboard();
    this.companyService.getCompanies();
    this.companyList = this.companyService.companiesList;
  }

  // page contents managing functions
  activateDashboard() {
    this.dashboardActive = true;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Dashboard";
  }

  activateCompanies() {
    this.dashboardActive = false;
    this.companiesActive = true;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Companies";
  }

  activateMentors() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = true;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Mentors";
  }

  activateStudents() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = true;
    this.notificationsActive = false;
    this.title = "Students";
  }

  activateNotifications() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = true;
    this.title = "Notifications";
  }


  // logout funtion
  logout() {
    this.authService.logoutUser();
  }

}
