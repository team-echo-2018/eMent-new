import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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


  message: string;
  senderId = 'usr003';
  recieverid: 'usr003' ;
  owner = "mario";
  data: any;

  constructor(private authService: AuthenticationService, private userService: UserService,private afs: AngularFirestore) {}

  ngOnInit() {
    this.authService.isUserLogged();
    console.log(this.userService.getCurrentUser());


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

    this.recieverid =senderID;
    this.data.changesMessage(senderID);
  }

  //THE PART FOR THE ADDITION OF NEW MESSAGES TO THE FIRESTORE
  // THERE ARE CURRENTLY TWO MAIN DATABSE COLLECTIONS *sendEvent* FOR MAINTAINING THE DETAILS OF A MESSAGE BEING SENT
  // * messages * FOR RECORDING THE DETAILS OF MESSAGES BEING SENT


  addmessage() {

    // *** CHECK FOR DUPLICATES OF PRIOR SENDEVENTS FROM sendEvent COLLECTION ***

    let duplicates =this.afs.collection('sendEvent',ref =>ref.where('recieverID','==',this.owner).where("senderID","==",this.senderId));

    // ADD NEW MESSAGE DOCUMENT TO message COLLECTION

    //                      $$$$$$ IMPORTANT $$$$$$

    //CHANGE THE VALUES OF this.recieverID and this.senderID AS THESE ARE FOR TESTING PERPOSES
    //    this.senderID ==> this.owner
    //    this.recieverID ==> this.reciverId

    this.afs.collection('messages').add({'message':this.message,'recieverID':this.recieverid,'senderID':this.senderId});

    //IF DUPLICATES DONT EXIST AND THE #duplicate VARIABLE IS NONE ==>PROCEED!!

    if(!duplicates){

      this.afs.collection('sendEvent').add({'recieverID':this.recieverid,'senderID':this.senderId});

    }else{

      console.log("duplicate sender reciever pairs found !!");

    }



}

}
