import { Injectable, OnInit } from '@angular/core';
import { IListing } from '../shared/Interfaceses/listing';
import { DataStoreService, Query } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class ListingService{

  collection: any;
  allListings: IListing[];
  selectedListing: IListing;

  constructor(datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('listings');
  }

  getAllListings() {
    this.collection.find()
      .subscribe((entities) => {    
        this.allListings = entities as IListing[];
      }, (error) => {
        console.log(error);
      });
  }
}
