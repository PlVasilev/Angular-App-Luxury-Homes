import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { SingleComponent } from './single/single.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListingRoutingModule } from './listing-routing.module';



@NgModule({
  declarations: [AllComponent, AddComponent, SingleComponent, DetailsComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListingRoutingModule
  ],
  exports:[
    [AllComponent,
      AddComponent, 
      DetailsComponent,
      EditComponent]
  ]
})
export class ListingModule { }
