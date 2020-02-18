import { Injectable } from '@angular/core';
import { DataStoreService, DataStoreType } from 'kinvey-angular-sdk';
import { IMessage } from '../shared/Interfaceses/message';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  
  collection: any;
  messages: IMessage[];
  isDeleted: boolean;
  

  constructor(
   private datastoreService: DataStoreService,
   private router: Router,
   private notifierService: NotifierService) { 
    this.collection = datastoreService.collection('messages', DataStoreType.Network);
    this.isDeleted = true;
  }

  async saveMessage(entity: IMessage) {
    try {
      const savedEntity = await this.collection.save(entity).then((result) => {
        this.notifierService.notify("success", "Message has been send to the owner!");
      }).catch((error) => {
        console.log(error);
        this.notifierService.notify("error", "There was problem sending the message to the site owner please try again latter!");
      });
      this.router.navigate(['listing/all']);
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }

  deleteMessage(id) {
    this.collection.removeById(id)
      .then(function onSuccess(result) {
        this.isDeleted = true;
      }).catch(function onError(error) {
        this.isDeleted = false;
        console.log(error);
      });
      this.messages = this.messages.filter(x => x._id != id);
      this.isDeleted ? this.notifierService.notify("success", "The message has been removed!") :
      this.notifierService.notify("error", "There was problem removing the message please try again latter!");
     
  }
  
  async getAllMessags() {
    this.collection.find()
      .subscribe((entities) => {
        this.messages = entities as IMessage[];
        this.messages.sort((a, b) => a.sendOn - b.sendOn);
        console.log(entities)
        this.notifierService.notify("success", "Messages are been fetched successfully!");
      }, (error) => {
       this.notifierService.notify("error", "There was problem loading the messages for you please try again latter!");
        console.log(error);
      });
  }
}
