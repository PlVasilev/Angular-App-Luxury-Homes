import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceLH } from '../user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor( private userService: UserServiceLH){}

  @ViewChild('registerFrom', { static: true }) from: NgForm

  registerHandler(data) {
    this.userService.signup(data)
    this.from.reset();
  }


}
