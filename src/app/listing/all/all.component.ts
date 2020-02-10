import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { IListing } from 'src/app/shared/Interfaceses/listing';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

allListings: IListing[];
listingId = null;

  constructor(private listingService: ListingService) { }

  async ngOnInit() {
    this.listingService.collection.find()
    .subscribe((entities) => {    
      this.allListings = entities as IListing[];
    }, (error) => {
      console.log(error);
    });         
  }

  detailsHandler(listing: IListing){
    
  }

  fromChild(event){
    this.listingId = event;
  }

}
