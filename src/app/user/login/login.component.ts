import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('loginFrom',{ static: true }) public from: NgForm

  constructor() { }

  ngOnInit() {
  }

  loginHandler(data){
    console.log(data);
    
  }
  
ngAfterViewInit(){
 this.from.form.patchValue({
  username: 'My name :))))))))))))))'
 })

 
//  onSubmit() {
//   const body = this.form.value;
//   // Send body to an API
//   this.form.reset();}


}
  
}
  
  


