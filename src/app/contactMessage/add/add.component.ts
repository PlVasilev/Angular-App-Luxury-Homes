import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMessage } from 'src/app/shared/Interfaceses/message';
import { UserServiceLH } from 'src/app/user/user.service';
import { AdministrationService } from '../../administration/administration.service';

@Component({
  selector: 'app-messages',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private userService:UserServiceLH, private administrationService:AdministrationService) { }

  @ViewChild('addMessageForm', { static: true }) from: NgForm

  ngOnInit() {
  }

  addMessageHandler(data: IMessage){
    var currentMessage: IMessage;
    var date = new Date();
    currentMessage = {
      sendOn: date.getTime(),
      sendby: this.userService.user.username,
      subject: data.subject,
      content: data.content
    };
    this.administrationService.saveMessage(currentMessage);
  }
}
