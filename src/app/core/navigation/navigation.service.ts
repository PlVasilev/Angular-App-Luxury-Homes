import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { 
    this.isMenuClicked = false;
  }

  isMenuClicked: boolean;

  ngOnInit() {
  }

  toggleMenu(event){
    this.isMenuClicked = !!this.isMenuClicked;  
    console.log(this.isMenuClicked);     
  }
}
