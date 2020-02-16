import { Component, OnInit} from '@angular/core';
import { UserServiceLH } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  ngOnInit(): void {
    this.userService.getAllReqests();
    
  }
  constructor(private userService: UserServiceLH, private router: Router){
  }

  get allRequests(){ return this.userService.allRequests}

  removeRequest(id){
    this.userService.deleteRequest(id);
  }

}