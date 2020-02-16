import { Injectable, OnInit } from '@angular/core';
import { IListing } from '../shared/Interfaceses/listing';
import { DataStoreService, Query, DataStoreType } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';
import { ISearch } from '../shared/Interfaceses/search';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  collection: any;
  allListings: IListing[];
  selectedListing: IListing;
  searchCollection: IListing[];
  isDeleted: boolean;
  isFound: boolean;

  constructor(
    datastoreService: DataStoreService,
     private router: Router,
     private notifierService: NotifierService) {
    this.collection = datastoreService.collection('listings', DataStoreType.Network);
    this.isDeleted = true;
    this.isFound = true;
  }

  searchListings(value: ISearch) {
    this.searchCollection = null;
    this.allListings.forEach( x => {  
      if(x.title.includes(value.search)){
        if(this.searchCollection == null){
          this.searchCollection =[];
        }
        this.searchCollection.push(x);
      }
    })
    this.router.navigate(['listing/search']);
  }

  deleteListing(id) {
    this.selectedListing = null;
    this.collection.removeById(id)
      .then(function onSuccess(result) {
      }).catch(function onError(error) {
        console.log(error);
      });
    localStorage.removeItem('currentListing');
    this.router.navigate(['listing/all']);
    this.isDeleted ? 
    this.notifierService.notify("success", "The Property has been removed!") :
    this.notifierService.notify("error", "There was problem removing the propery please try again latter!");
  }

  findById(id: string) {
    this.collection.findById(id)
      .subscribe((entity) => {
        this.selectedListing = entity as IListing;
        console.log(this.selectedListing);
      }, (error) => {
        console.log(error);
      });
      this.isDeleted ? 
    this.notifierService.notify("success", "You have selected Propery!") :
    this.notifierService.notify("error", "There was problem selecting the propery please try again latter!");
  }

  async getAllListings() {
    this.collection.find()
      .subscribe((entities) => {
        this.allListings = entities as IListing[];
        this.notifierService.notify("success", "Properties are been fetched successfully!");
        //console.log(entities)
      }, (error) => {
        console.log(error);
        this.notifierService.notify("error", "There was problem loading the properties for you please try again latter!");
      });
  }

  async save(entity: IListing) {
    try {
      const savedEntity = await this.collection.save(entity);
      this.router.navigate(['listing/all']);
      this.notifierService.notify("success", "You have added or edited Propery!");
    } catch (error) {
      console.log(error);
      this.notifierService.notify("error", "There was problem adding the propery please try again latter!");
    }
  }
}
