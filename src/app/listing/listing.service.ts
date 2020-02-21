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

  constructor(
    datastoreService: DataStoreService,
     private router: Router,
     private notifierService: NotifierService) {
    this.collection = datastoreService.collection('listings', DataStoreType.Network);
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
    if(this.allListings.length == this.allListings.filter(x => x._id != id).length){
      this.notifierService.notify("error", "There was problem removing the propery please try again latter!");
    }else{
      this.selectedListing = null;
      this.collection.removeById(id);
      this.allListings = null;
      localStorage.removeItem('currentListing');
      this.router.navigate(['listing/all']);
      this.notifierService.notify("success", "The Property has been removed!");
    }
  }

  findById(id: string) {
    this.collection.findById(id)
      .subscribe((entity) => {
        this.selectedListing = entity as IListing;
        this.notifierService.notify("success", "You have selected Propery!");
      }, (error) => {
        this.notifierService.notify("error", "There was problem selecting the propery please try again latter!");
        console.log(error);
      });   
  }

  async getAllListings() {
    this.collection.find()
      .subscribe((entities) => {
        this.allListings = entities as IListing[];
       // this.notifierService.notify("success", "All properties are been fetched successfully!");
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
