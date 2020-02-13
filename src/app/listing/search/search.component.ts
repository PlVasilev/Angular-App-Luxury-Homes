import { Component, ViewChild } from '@angular/core';
import { ListingService } from '../listing.service';
import { NgForm } from '@angular/forms';
import { IListing } from 'src/app/shared/Interfaceses/listing';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  get allListings() { return this.listingService.searchCollection; }

  listingId = null;

  constructor(private listingService: ListingService) { }

 
  @ViewChild('searchFrom', { static: true }) from: NgForm
  
  searchFormHandler(value){  
    this.listingService.searchListings(value);
    
  }
  detailsHandler(listing: IListing){
    this.listingService.selectedListing = listing;
  }

  fromChild(event){
    this.listingId = event;
  }

}
