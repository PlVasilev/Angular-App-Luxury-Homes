import { Component, OnInit, ViewChild } from '@angular/core';
import { ListingService } from '../listing/listing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private listingService: ListingService) { }

 

  ngOnInit() {
    this.listingService.loadListings();
    
    
  }

}
