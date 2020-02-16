import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceLH } from '../user.service';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor( private userService: UserServiceLH,private notifierService: NotifierService){}

  @ViewChild('registerFrom', { static: true }) from: NgForm

  registerHandler(data) {
    this.userService.signup(data).then((result) =>{
      if(result){
        this.notifierService.notify("success", "You have sucsefully register!");
        this.from.reset();
      }else{
        this.notifierService.notify("error", "Username has already been taken select different one!");
      }
    }).catch((error) =>{
      this.notifierService.notify("warning", "There was a problem with the site please try again Later!");
    })
    
  }


}
