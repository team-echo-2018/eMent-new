import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/entities/student';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/entities/company';
import { Mentor } from 'src/app/entities/mentor';
import { MentorService } from 'src/app/services/mentor.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  studentList: Student[];
  companyList: Company[];
  mentorList: Mentor[];

  constructor(private studentService: StudentService, private companyService: CompanyService, private mentorService: MentorService) { }

  ngOnInit() {
    this.studentService.getStudents();
    this.companyService.getCompanies();
    this.mentorService.getMentors();
    this.studentList = this.studentService.studentsList;
    this.companyList = this.companyService.companiesList;
    this.mentorList = this.mentorService.mentorsList;
  }

}
