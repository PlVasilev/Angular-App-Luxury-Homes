import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IListing } from 'src/app/shared/Interfaceses/listing';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input('listing') listing: IListing

  // @Output() 
  // listingDetailEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private listingService: ListingService) { }

  ngOnInit() {
  }

  // detailsHandler(listing: IListing) {
  //   this.listingService.selectedListing = listing;
  //   localStorage.setItem("currentListing", JSON.stringify(listing))
  //   console.log(listing);
  // }

  detailsIdHandler(listingId: string){
    this.listingService.findById(listingId)
    localStorage.setItem("currentListing", JSON.stringify(this.listing))
    //this.listingDetailEmitter.emit(this.listing._id)  
  }

}
