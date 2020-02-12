import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing/listing.service';
import { IListing } from './shared/Interfaceses/listing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private listingService: ListingService){}

  ngOnInit(): void {
    if(this.listingService.selectedListing == null){
      this.listingService.selectedListing = JSON.parse(localStorage.getItem('currentListing')) as IListing;
      console.log(this.listingService.selectedListing);
      
    }
  }
  title = 'luxury-homes';
}
