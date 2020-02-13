import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { UserServiceLH } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  get selectedListing(){ return this.listingService.selectedListing}

  get user() {return this.userServiceLH.user}

  constructor(
    private listingService: ListingService, 
    private userServiceLH: UserServiceLH,
    private activatedRoute: ActivatedRoute,
    ) { }

  deleteHandler(id: string){
    this.listingService.deleteListing(id)
  }

  ngOnInit() {
    this.listingService.findById(this.activatedRoute.snapshot.params.id)
    localStorage.setItem("currentListing", JSON.stringify(this.selectedListing))   
  }

}
