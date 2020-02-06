import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IListing } from '../shared/Interfaceses/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http: HttpClient) { }

  listings: IListing[];

  selectedListing: IListing;

  BASE_URL:string = 'https://baas.kinvey.com/';
  APP_KEY:string = 'kid_H1d8X3prX'
  APP_SECRET: string = '9cb8637474184a44a038cba964ad90de'
  AUTH_HEADERS: string = `Authorization: "Basic " + btoa(this.APP_KEY + ":" + this.APP_SECRET)`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(this.APP_KEY + ":" + this.APP_SECRET)
    })
  };

  loadListings() {
    this.http.get<IListing[]>(this.BASE_URL + 'appdata/' + this.APP_KEY + '/cars?query={}&sort={"_kmd.ect": -1}'
    , this.httpOptions).subscribe(listings => {
      console.log(this.listings);
      
      this.listings = listings;
    });
  }
}
