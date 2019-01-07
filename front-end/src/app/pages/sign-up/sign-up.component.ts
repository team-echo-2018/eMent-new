import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEnum } from '../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../entities/user';
import { Student } from '../../entities/student';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { StudentService } from '../../services/student.service';
import { Auth } from '../../entities/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  fname: string;
  lname: string;
  address: string;
  email: string;
  phone: string;
  image: string;
  description: string;

  usertype: string;
  username: string;
  password: string;
  confirm: string;

  // typeStudent: string;
  // typeMentor: string;
  // typeCompanyAdmin: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  imageAddress: string;

  constructor(private router: Router,private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService,
    private studentService: StudentService) { }

  ngOnInit() {
    this.image = "default.jpg";
    this.imageAddress = HttpEnum.BASEURL + this.image;
  }

  submitForm() {
    // let unm = this.userService.insertUser(this.createUser());
    // let auth = new Auth(this.username,this.password);

    // let student = this.createStudent();
    // this.authService.getLoggingUser(auth);
    
    
    // student.setId(this.authService.getUser().userId);
    // console.log(student);
    // this.studentService.insertStudent(student);

    alert("Registration Successful.");
    this.router.navigate(['/login']);
    
  }

  // function for image uploading
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() { 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.image = this.currentFileUpload.name;
        this.imageAddress = HttpEnum.BASEURL + this.image;
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

  // userObject(): any {
  //   let User = new 
  //   User.setFirstName(this.fname);
  //   User.setLastName(this.lname);
  //   User.setAddress(this.address);
  //   User.setPhone(this.phone);
  //   User.setEmail(this.email);
  //   User.setImgLink(this.image);
  //   User.setDescription(this.description);
  //   return User;
  // }

  createUser() {
    let user = new User();
    user.userName = this.username;
    user.userPassword = this.password;
    user.userType = this.usertype;
    return user;
  }

  createStudent() {
    let student = new Student();
    student.setFirstName(this.fname);
    student.setLastName(this.lname);
    student.setAddress(this.address);
    student.setEmail(this.email);
    student.setPhone(this.phone);
    student.setImgLink(this.image);
    student.setDescription(this.description);
    return student;
  }

  

  setUserType(type) {
    this.usertype = type;
  }

}
