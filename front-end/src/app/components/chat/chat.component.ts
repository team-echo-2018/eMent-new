import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { message } from '../../entities/message';
import { Utils } from 'src/app/utils/utils';
import { utils } from 'protractor';

interface isendEvent {
  recieverID: string;
  senderID: string;
}
interface imessage{
  message:string;
  recieverId:string;
  senderId:string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageCol :AngularFirestoreCollection<imessage>
  postsCol: AngularFirestoreCollection<isendEvent>;
  posts: Observable<isendEvent[]>;
  messages:Observable<imessage[]>;
  senderset =new Set();
  messagelist:imessage[];


  message: string;
  senderId = 'usr003';
  recieverid: 'usr003' ;
  owner:string;
  data: any;

  constructor(private authService: AuthenticationService, private userService: UserService,private afs: AngularFirestore) {}

  ngOnInit() {
    this.authService.isUserLogged();
    //console.log(this.userService.getCurrentUser());
    this.data =this.authService.getUser();
    this.owner =this.data.userName;
    //this.owner ='mario';

    this.postsCol = this.afs.collection('sendEvent', ref => ref.where('recieverID', '==', this.owner));
    this.messageCol =this.afs.collection('messages',ref => ref.where('recieverID','==',this.owner).where('senderID','==',this.senderId));
    // this.postsCol =this.afs.collection('sendEvent');
   // console.log(this.owner);

    this.posts = this.postsCol.valueChanges();
    // console.log(this.posts);
    this.messages =this.messageCol.valueChanges();
    // console.log(this.message.toString);


  }
  getPost(senderID){
    console.log("VERBOSE SETTING SENDER IS TO :"+senderID);

    this.senderId =senderID;
    console.log("user selected "+this.senderId);

    this.messageCol =this.afs.collection('messages',ref => ref.where('recieverID','==',this.senderId).where('senderID','==',this.owner));
    this.messageCol =this.afs.collection('messages',ref => ref.where('recieverID','==',this.owner).where('senderID','==',this.senderId));
    this.messages =this.messageCol.valueChanges();
    this.messages.subscribe(
      (result)=>{
        if (result === null) {
          console.log("respond error");
        } else {
          let i = 0;
          while (result[i]) {
            let rep = Utils.convertimessagetomessage(result[i]);
            this.messagelist.push(rep);
            i = i + 1;
          }
        }
        console.log(this.messagelist);

      }
    )
  }



  addmessage() {



    let duplicates =this.afs.collection('sendEvent',ref =>ref.where('recieverID','==',this.senderId).where("senderID","==",this.owner));


    this.afs.collection('messages').add({'message':this.message,'recieverID':this.recieverid,'senderID':this.owner});
    //comment before code review
    this.afs.collection('messages').add({'message':this.message,'recieverID':this.owner,'senderID':this.recieverid});


    if(!duplicates){

      this.afs.collection('sendEvent').add({'recieverID':this.recieverid,'senderID':this.senderId});

    }else{

      console.log("duplicate sender reciever pairs found !!");

    }
    this.messagelist.push(Utils.convertimessagetomessage({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId}));

    alert("message added");


}

}
