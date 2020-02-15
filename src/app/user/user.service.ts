import { Injectable, Output, OnInit } from '@angular/core';
import { PingService, DataStoreService, DataStoreType, Query } from 'kinvey-angular-sdk';
import { UserService } from 'kinvey-angular-sdk/lib/';
import { User } from 'kinvey-js-sdk/lib/';
import { ListingService } from '../listing/listing.service';
import { Router } from '@angular/router';
import { IRequest } from '../shared/Interfaceses/request';


@Injectable({
  providedIn: 'root'
})
export class UserServiceLH {

  collection: any;
  allRequests: IRequest[];

  constructor(
    private userService: UserService, 
    private listingService: ListingService, 
    private router: Router,
    private datastoreService: DataStoreService
    ) {
      this.collection = datastoreService.collection('requests', DataStoreType.Network);
    }

  user: User  =  this.userService.getActiveUser();
  
  deleteRequest(id) {
    this.collection.removeById(id)
      .then(function onSuccess(result) {
      }).catch(function onError(error) {
        console.log(error);
      });
      this.allRequests = this.allRequests.filter(x => x._id != id);
  }
  
  async getAllReqests() {
    const query = new Query();
    query.equalTo('postedBy', this.user.username);
    this.collection.find(query)
      .subscribe((entities) => {
        this.allRequests = entities as IRequest[];
        this.allRequests.sort((a, b) => a.requestedOn - b.requestedOn);
        console.log(entities)
      }, (error) => {
        console.log(error);
      });
  }

  async saveRequest(entity: IRequest) {
    try {
      console.log(entity);
      
      const savedEntity = await this.collection.save(entity);
      this.listingService.getAllListings().then(() => this.router.navigate(['listing/all']))
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: any) {
    try {
      data.role = "user";
      this.user = await this.userService.signup(data);
      console.log(this.user);
      
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
     console.log( this.user);
     this.allRequests = null;
     localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }

}
