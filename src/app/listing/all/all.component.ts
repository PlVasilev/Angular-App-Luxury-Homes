import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { IListing } from 'src/app/shared/Interfaceses/listing';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  get allListings() { return this.listingService.allListings; }

  listingId = null;

  constructor(private listingService: ListingService) { }

  async ngOnInit() {
    if(this.listingService.allListings == null){
      await this.listingService.getAllListings();
    }
  }

  detailsHandler(listing: IListing){
    this.listingService.selectedListing = listing;
  }

  fromChild(event){
    this.listingId = event;
  }

}
