import { Component, OnInit, ViewChild } from '@angular/core';
import { ListingService } from '../listing.service';
import { NgForm } from '@angular/forms';
import { IListing } from 'src/app/shared/Interfaceses/listing';
import { UserServiceLH } from 'src/app/user/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private listingService: ListingService, private userService: UserServiceLH) { }

  @ViewChild('addListingForm', { static: true }) from: NgForm

  ngOnInit() {
  }

  addListingHandler(data: IListing){
    data.postedBy = this.userService.user.username;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    data.postedOn = new Date().toLocaleDateString('en-US', options);
    this.listingService.save(data);
    this.from.reset();
  }
}
