import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '../contactMessage/add/add.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule
  ],
  exports: [MessagesComponent]
})
export class AdministrationModule { }
