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

  constructor(
   private datastoreService: DataStoreService,
   private router: Router,
   private notifierService: NotifierService) { 
    this.collection = datastoreService.collection('messages', DataStoreType.Network)
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
}
