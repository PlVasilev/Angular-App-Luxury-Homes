import { Component } from '@angular/core';
import { UserServiceLH } from '../user/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private userService: UserServiceLH) { }

  get currentUser(){return this.userService.user}
}
