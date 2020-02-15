import { Injectable, OnInit } from '@angular/core';
import { IListing } from '../shared/Interfaceses/listing';
import { DataStoreService, Query, DataStoreType } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';
import { ISearch } from '../shared/Interfaceses/search';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  collection: any;
  allListings: IListing[];
  selectedListing: IListing;
  searchCollection: IListing[];

  constructor(datastoreService: DataStoreService, private router: Router) {
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
    this.selectedListing = null;
    this.collection.removeById(id)
      .then(function onSuccess(result) {
      }).catch(function onError(error) {
        console.log(error);
      });
    localStorage.removeItem('currentListing');
    this.getAllListings();
    this.router.navigate(['listing/all']);
  }

  findById(id: string) {
    this.collection.findById(id)
      .subscribe((entity) => {
        this.selectedListing = entity as IListing;
        console.log(this.selectedListing);

      }, (error) => {
        console.log(error);
      });
  }

  async getAllListings() {
    this.collection.find()
      .subscribe((entities) => {
        this.allListings = entities as IListing[];
        console.log(entities)
      }, (error) => {
        console.log(error);
      });
  }

  async save(entity: IListing) {
    try {
      const savedEntity = await this.collection.save(entity);
      this.getAllListings().then(() => this.router.navigate(['listing/all']))
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }
}
