import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
 
  constructor(private uploadService: UploadFileService, private authService: AuthenticationService) { }
 
  ngOnInit() {
    this.authService.isUserLogged();
  }

  isMentor() {
    return this.authService.getUser().userType == 'M';
  }

  isStudent() {
    return this.authService.getUser().userType == 'S';
  }
 
  // selectFile(event) {
  //   this.selectedFiles = event.target.files;
  // }
 
  // upload() {
  //   this.progress.percentage = 0;
 
  //   this.currentFileUpload = this.selectedFiles.item(0);
  //   this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
  //     if (event.type === HttpEventType.UploadProgress) {
  //       this.progress.percentage = Math.round(100 * event.loaded / event.total);
  //     } else if (event instanceof HttpResponse) {
  //       console.log('File is completely uploaded!');
  //     }
  //   });
 
  //   this.selectedFiles = undefined;
  // }

}
