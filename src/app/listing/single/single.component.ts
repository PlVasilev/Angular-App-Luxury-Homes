import { Component, OnInit, Input} from '@angular/core';
import { IListing } from 'src/app/shared/Interfaceses/listing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input('listing') listing: IListing

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailsIdHandler(listingId: string){
    this.router.navigate([`/listing/details/${listingId}`])
  }

}
