import { Injectable} from '@angular/core';
import { DataStoreService, DataStoreType, Query } from 'kinvey-angular-sdk';
import { UserService } from 'kinvey-angular-sdk/lib/';
import { User } from 'kinvey-js-sdk/lib/';
import { ListingService } from '../listing/listing.service';
import { Router } from '@angular/router';
import { IRequest } from '../shared/Interfaceses/request';
import { NotifierService } from 'angular-notifier';


@Injectable({
  providedIn: 'root'
})
export class UserServiceLH {

  collection: any;
  allRequests: IRequest[];
  private readonly notifier: NotifierService;
  isDeleted: boolean;

  constructor(
    private userService: UserService, 
    private listingService: ListingService, 
    private router: Router,
    private datastoreService: DataStoreService,
    private notifierService: NotifierService
    ) {
      this.collection = datastoreService.collection('requests', DataStoreType.Network);
      this.isDeleted = true;
    }

  user: User  =  this.userService.getActiveUser();
  
  deleteRequest(id) {
    this.collection.removeById(id)
      .then(function onSuccess(result) {
        this.isDeleted = true;
      }).catch(function onError(error) {
        this.isDeleted = false;
        console.log(error);
      });
      this.allRequests = this.allRequests.filter(x => x._id != id);
      this.isDeleted ? this.notifierService.notify("success", "The request has been removed!") :
      this.notifierService.notify("error", "There was problem removing the request please try again latter!");
     
  }
  
  async getAllReqests() {
    const query = new Query();
    query.equalTo('postedBy', this.user.username);
    this.collection.find(query)
      .subscribe((entities) => {
        this.allRequests = entities as IRequest[];
        this.allRequests.sort((a, b) => a.requestedOn - b.requestedOn);
        console.log(entities)
        this.notifierService.notify("success", "Requests are been fetched successfully!");
      }, (error) => {
       this.notifierService.notify("error", "There was problem loading the requests for you please try again latter!");
        console.log(error);
      });
  }

  async saveRequest(entity: IRequest) {
    try {
      console.log(entity);

      const savedEntity = await this.collection.save(entity).then((result) => {
        this.notifierService.notify("success", "Request has been send to the owner!");
      }).catch((error) => {
        console.log(error);
        this.notifierService.notify("error", "There was problem sending the request to the owner please try again latter!");
      });
      this.router.navigate(['listing/all']);
      console.log(savedEntity);
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: any): Promise<boolean> {
    try {
      data.role = "user";
      this.user = await this.userService.signup(data);
      console.log(this.user);
       this.router.navigate(['listing/all']);
      return true
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      this.user  = await this.userService.login(username, password);
       this.router.navigate(['listing/all']);   
      return true
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async logout() {
    try {
      await this.userService.logout();
     this.user= null;
     this.listingService.allListings = null;
     console.log( this.user);
     this.allRequests = null;
     this.notifierService.notify("success", "You have logged out!");
     localStorage.clear();
    } catch (error) {
      this.notifierService.notify("error", "There was problem with your logging you out!");
      console.log(error);
    }
  }

}
