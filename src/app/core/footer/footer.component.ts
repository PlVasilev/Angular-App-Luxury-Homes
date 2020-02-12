import { Component, OnInit } from '@angular/core';
import { UserServiceLH } from 'src/app/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private userService: UserServiceLH) {   
  }

  get currentUser(){return this.userService.user}

  logoutHandler(){
    this.userService.logout();
  }

  ngOnInit() {
  }

}
