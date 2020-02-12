import { Injectable, Output, OnInit } from '@angular/core';
import { PingService } from 'kinvey-angular-sdk';
import { UserService } from 'kinvey-angular-sdk/lib/';
import { User } from 'kinvey-js-sdk/lib/';
import { ListingService } from '../listing/listing.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserServiceLH {

  constructor(
    private userService: UserService, 
    private listingService: ListingService, private router: Router) {}

  user: User  =  this.userService.getActiveUser();
  

  async signup(data: any) {
    try {
      data.role = "user";
      this.user = await this.userService.signup(data);
      this.listingService.getAllListings().then(() => this.router.navigate(['listing/all'])) ;;
    } catch (error) {
      console.log(error);
    }
  }

  async login(username: string, password: string) {
    try {
      this.user  = await this.userService.login(username, password);
       this.listingService.getAllListings().then(() => this.router.navigate(['listing/all'])) ;     
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.userService.logout();
     this.user= null;
     this.listingService.allListings = null;
     localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

}
