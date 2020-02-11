import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceLH } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginFrom', { static: true }) from: NgForm

  constructor(private userService: UserServiceLH) {}

  username = "admin";
  password = "admin";

  loginHandler(data) {
    console.log(data);
    this.userService.login(data.username, data.password)
    this.userService.verify()
    this.from.reset();
  }


}










