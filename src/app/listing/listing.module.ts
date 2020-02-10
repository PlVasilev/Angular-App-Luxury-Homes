import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { SingleComponent } from './single/single.component';



@NgModule({
  declarations: [AllComponent, AddComponent, SingleComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    [AllComponent,AddComponent]
  ]
})
export class ListingModule { }
