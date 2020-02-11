import { Component, OnInit, ViewChild } from '@angular/core';
import { ListingService } from '../listing.service';
import { IListing } from 'src/app/shared/Interfaceses/listing';
import { UserServiceLH } from 'src/app/user/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  get listing() {return this.listingService.selectedListing}


  constructor(private listingService: ListingService, private userService: UserServiceLH) { }

  ngOnInit() {  
  }

  editListingHandler(data: IListing){
    data.postedBy = this.userService.user.data.username
    data._id = this.listing._id;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    data.postedOn = new Date().toLocaleDateString('en-US', options);
    this.listingService.save(data);
  }


    
}
