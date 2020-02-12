import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceLH } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginFrom', { static: true }) from: NgForm

  constructor(private userService: UserServiceLH ) {}

  username = "admin";
  password = "admin";

  loginHandler(data) {
    console.log(data);
    this.userService.login(data.username, data.password)
    this.from.reset();
  }


}










