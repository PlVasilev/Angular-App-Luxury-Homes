import { Injectable, OnInit } from '@angular/core';
import { IListing } from '../shared/Interfaceses/listing';
import { DataStoreService, Query } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  collection: any;
  listings: any;

  constructor(datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('listings');
  }

  find() {
    this.collection.find()
      .subscribe((entities) => {
        console.log(entities);
        
        this.listings = entities;
      }, (error) => {
        console.log(error);
       
      }, () => {
        // ...
      });
  }
}
