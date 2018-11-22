import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { map } from 'rxjs/operators';
//import { ShareuNameService } from '../shareu-name.service';

// tslint:disable-next-line:class-name
interface isendEvent {
  recieverID: string;
  senderID: string;
}
interface imessage{
  message:string;
  recieverId:string;
  senderId:string
}
//  let senderList =Array<{string}>;

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messageCol :AngularFirestoreCollection<imessage>
  postsCol: AngularFirestoreCollection<isendEvent>;
  posts: Observable<isendEvent[]>;
  messages:Observable<imessage[]>;
  senderset =new Set();


  message: string;
  senderId = 'usr003';
  recieverid: 'usr003' ;
  owner = "mario";
  constructor(private afs: AngularFirestore ) {

  }

  ngOnInit() {
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
    // this.data.changesMessage(senderID);
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
  openNav() {

  }

}
