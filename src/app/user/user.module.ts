import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RequestsComponent } from './requests/requests.component';



@NgModule({
  declarations: [RegisterComponent, LoginComponent, RequestsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports:[
    [RegisterComponent, LoginComponent,RequestsComponent]
  ]
})
export class UserModule { }
