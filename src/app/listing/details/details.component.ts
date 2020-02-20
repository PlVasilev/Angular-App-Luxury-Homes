import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListingService } from '../listing.service';
import { UserServiceLH } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRequest } from 'src/app/shared/Interfaceses/request';


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

  sendRequestHandler(){
    var currentRequest: IRequest;
    var date = new Date();
    currentRequest = {
      requestedOn: date.getTime(),
      name: this.selectedListing.title,
      requestedBy: this.userServiceLH.user.username,
      email: this.userServiceLH.user.email,
      postedBy: this.selectedListing.postedBy   
    };
   // console.log(currentRequest);
    
   this.userServiceLH.saveRequest(currentRequest)
  }

  ngOnInit() {
    this.listingService.selectedListing = null;
    this.listingService.findById(this.activatedRoute.snapshot.params.id)
    localStorage.setItem("currentListing", JSON.stringify(this.selectedListing))   
  }

}
