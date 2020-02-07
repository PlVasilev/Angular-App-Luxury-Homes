import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserServiceLH } from 'src/app/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserServiceLH) {   
  }

  get currentUser(){return this.userService.user}

  logoutHandler(){
    this.userService.logout();
  }

  ngOnInit() {
  }


}
