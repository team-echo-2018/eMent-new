import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEnum } from '../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';

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

  selectedFiles: FileList;
  currentFileUpload: File;
  imageAddress: string;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.image = "default.jpg";
    this.imageAddress = HttpEnum.BASEURL + this.image;
  }

  submitForm() {
    
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
