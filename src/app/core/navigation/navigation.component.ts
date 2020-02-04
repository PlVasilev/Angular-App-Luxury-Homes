import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { 
    this.isMenuClicked = false;
  }

  isMenuClicked: boolean;

  ngOnInit() {
  }

  toggleMenu(event){
    this.isMenuClicked = !this.isMenuClicked;  
    console.log(this.isMenuClicked);     
  }
}
