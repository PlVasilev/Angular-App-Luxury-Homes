import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { UserServiceLH } from 'src/app/user/user.service';
import { AuthGuard } from 'src/app/auth.guard';
import { ListingService } from 'src/app/listing/listing.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(
    private userService: UserServiceLH, 
    private authGuard: AuthGuard,
    ) {}

  get currentUser(){return this.userService.user}

  logoutHandler(){
    this.authGuard.isAdmin =false;
    this.authGuard.isLogged = false;
    this.userService.logout();
  }
}
