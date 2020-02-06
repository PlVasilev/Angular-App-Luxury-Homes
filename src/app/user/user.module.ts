import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    [RegisterComponent, LoginComponent]
  ]
})
export class UserModule { }
