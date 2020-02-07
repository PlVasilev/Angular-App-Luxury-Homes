import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';



@NgModule({
  declarations: [AllComponent, AddComponent],
  imports: [
    CommonModule
  ],
  exports:[
    [AllComponent,AddComponent]
  ]
})
export class ListingModule { }
