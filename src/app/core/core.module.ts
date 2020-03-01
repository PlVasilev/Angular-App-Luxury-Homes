import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';



@NgModule({
  declarations: [NavigationComponent, FooterComponent,LandingComponent,NotFoundComponent,NotAuthorizedComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [NavigationComponent, FooterComponent,LandingComponent,NotFoundComponent,NotAuthorizedComponent]
})
export class CoreModule { }
