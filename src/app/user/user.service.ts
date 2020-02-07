import { Injectable, Output } from '@angular/core';
import { PingService } from 'kinvey-angular-sdk';
import { UserService } from 'kinvey-angular-sdk/lib/';
import { User } from 'kinvey-js-sdk/lib/';


@Injectable({
  providedIn: 'root'
})
export class UserServiceLH {

  constructor(private pingService: PingService, private userService: UserService) {}

  user: User;

  async signup(data: any) {
    try {
      this.user = await this.userService.signup(data);
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  }

  async login(username: string, password: string) {
    try {
      this.user  = await this.userService.login(username, password);
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.userService.logout();
      this.user= null;
    } catch (error) {
      console.log(error);
    }
  }


  async verify() {
    try {
      const response = await this.pingService.ping();
      console.log("Kinvey is up! "
                 + "Version: " + response.version
                 + " Response: " + response.kinvey
      );
    } catch (error) {
      console.log("Kinvey Ping Failed. Response: ${error.description}");
    }
    
  }
}
