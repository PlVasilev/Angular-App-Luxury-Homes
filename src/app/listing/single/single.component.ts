import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IListing } from 'src/app/shared/Interfaceses/listing';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input('listing') listing: IListing

  @Output() 
  listingDetailEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  detailsIdHandler(){
    console.log(this.listing._id);
    this.listingDetailEmitter.emit(this.listing._id)  
  }

}
