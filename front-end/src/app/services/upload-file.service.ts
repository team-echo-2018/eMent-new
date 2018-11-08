import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { HttpEnum } from '../utils/httpEnum';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File){
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest('POST', HttpEnum.UPLOADFILE, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }

}
