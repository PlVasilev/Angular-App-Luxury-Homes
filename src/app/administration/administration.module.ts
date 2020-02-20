import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './contactMessage/add/add.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule
  ],
  exports: [AddComponent]
})
export class AdministrationModule { }
