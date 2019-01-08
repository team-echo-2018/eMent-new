import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '../../services/user.service';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpResponse } from '@angular/common/http';
import { HttpEnum } from '../../utils/httpEnum';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  editable: boolean;
  btnCaption: string;

  fname: string;
  lname: string;
  address: string;
  email: string;
  phone: string;
  image: string;
  description: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  imageAddress: string;


  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private uploadService: UploadFileService) { }

  ngOnInit() {
    // if user is not logged, redirect to login page
    this.authService.isUserLogged();

    // if user is logged, get the current user
    this.user = this.userService.getCurrentUser();

    this.fname = this.user.getFirstName();
    this.lname = this.user.getLastName();
    this.address = this.user.getAddress();
    this.email = this.user.getEmail();
    this.phone = this.user.getPhone();
    this.image = this.user.getImgLink();
    if (this.image == null || this.image == "") {
      this.image = "default.jpg";
    }
    this.description = this.user.getDescription();

    this.imageAddress = HttpEnum.BASEURL + this.image;




    // // if user is not logged, redirect to login page
    // this.authService.isUserLogged();

    // // if user is logged, get the current user
    // this.user = this.userService.getCurrentUser();

    // this.fname = this.user.getFirstName();
    // this.lname = this.user.getLastName();
    // this.address = this.user.getAddress();
    // this.email = this.user.getEmail();
    // this.phone = this.user.getPhone();
    // this.image = this.user.getImgLink();
    // if (this.image == null || this.image == "") {
    //   this.image = "default.jpg";
    // }
    // this.description = this.user.getDescription();

    this.editable = true;
    this.btnCaption = "Edit";

  }

  isJanaka() {
    return this.authService.getUser().userName == "Janaka";
  }

  submitForm() {
    if (this.editable) {
      // change to save activating mode
      this.editable = false;
      this.btnCaption = "Save";
    } else {
      // saving the current details
      let authUser = this.authService.getUser();
      let user = this.updatedUserObject();
      this.userService.updateCurrentUserDetails(authUser, user);

      // change to edit activating mode
      this.editable = true;
      this.btnCaption = "Edit";
    }
  }

  updatedUserObject(): any {
    let updatedUser = this.userService.getCurrentUser();
    updatedUser.setFirstName(this.fname);
    updatedUser.setLastName(this.lname);
    updatedUser.setAddress(this.address);
    updatedUser.setPhone(this.phone);
    updatedUser.setEmail(this.email);
    updatedUser.setImgLink(this.image);
    updatedUser.setDescription(this.description);
    return updatedUser;
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
}
