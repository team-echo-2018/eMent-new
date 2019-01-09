import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/entities/student';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/entities/company';
import { Mentor } from 'src/app/entities/mentor';
import { MentorService } from 'src/app/services/mentor.service';
import { HttpEnum } from 'src/app/utils/httpEnum';
import { Project } from 'src/app/entities/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FeaturesComponent implements OnInit {

  base: string;

  projectList:Project[];
  studentList: Student[];
  companyList: Company[];
  mentorList: Mentor[];

  isSearching: boolean;
  viewUserId: string;

  constructor(private studentService: StudentService, private companyService: CompanyService,
    private mentorService: MentorService, private cd: ChangeDetectorRef,private projectService: ProjectService) { }

  ngOnInit() {
    this.studentService.getStudents();
    this.companyService.getCompanies();
    this.mentorService.getMentors();
    this.projectService.getProjects();

    this.studentList = this.studentService.studentsList;
    this.companyList = this.companyService.companiesList;
    this.mentorList = this.mentorService.mentorsList;
    this.projectList=this.projectService.projectsList;
    this.base = HttpEnum.BASEURL;

    this.isSearching = true;
  }

  searchProject(id) {
    let project = new Project();
    project.projectId = id;
    this.projectService.getProject(project);
    this.projectList = this.projectService.projectsList;

    // Detect changes on data
    this.cd.detectChanges();
  }

  searchStudent(fname) {
    let student = new Student();
    student.setFirstName(fname);
    this.studentService.getStudentByName(student);
    this.studentList = this.studentService.studentsList;

    // Detect changes on data
    this.cd.detectChanges();
  }

  searchCompany(name) {
    let company = new Company();
    company.companyName = name;
    this.companyService.getCompanyByName(company);
    this.companyList = this.companyService.companiesList;

    // Detect changes on data
    this.cd.detectChanges();
  }

  searchMentor(fname) {
    let mentor = new Mentor();
    mentor.setFirstName(fname);
    this.mentorService.getMentorByName(mentor);
    this.mentorList = this.mentorService.mentorsList;

    // Detect changes on data
    this.cd.detectChanges();
  }

  setViewUserId(id){
    this.viewUserId = id;
    this.isSearching = false;
  }

  back() {
    this.isSearching = true;
  }

}
