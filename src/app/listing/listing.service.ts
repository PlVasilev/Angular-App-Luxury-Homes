import { Injectable, OnInit } from '@angular/core';
import { IListing } from '../shared/Interfaceses/listing';
import { DataStoreService, Query } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  collection: any;
  allListings: IListing[];
  selectedListing: IListing;

  constructor(datastoreService: DataStoreService) {
    this.collection = datastoreService.collection('listings');
  }

  deleteListing(id) {
    this.selectedListing = null;
    this.collection.removeById(id)
      .then(function onSuccess(result) {       
        console.log(result);          
      }).catch(function onError(error) {
        console.log(error);
      });
      this.allListings = null;
      this.getAllListings();   
  }

  getAllListings() {
    this.collection.find()
      .subscribe((entities) => {
        this.allListings = entities as IListing[];
        console.log(this.allListings);      
      }, (error) => {
        console.log(error);
      });
  }

  async save(entity: IListing) {
    try {
      const savedEntity = await this.collection.save(entity);
      this.getAllListings()
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }
}
