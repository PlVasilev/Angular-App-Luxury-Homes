import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceLH } from '../user.service';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private readonly notifier: NotifierService;

  @ViewChild('loginFrom', { static: true }) from: NgForm

  constructor(private userService: UserServiceLH, private notifierService: NotifierService ) {
    this.notifier = notifierService;
  }

 // username = "admin";
 // password = "admin";

  loginHandler(data) {
    this.userService.login(data.username, data.password).then((result) => {
      if(result == true){
        this.notifier.notify("success", "You have Logged in!");
        this.from.reset();
      }else{
        this.notifier.notify("error", "Wrong Username or Password!");
      }
    }).catch((error) => {
      this.notifier.notify("warning", "There was a problem with the site please try again Later!");
    })  
  }
}










