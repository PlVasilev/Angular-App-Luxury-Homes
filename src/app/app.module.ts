import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingComponent } from './landing/landing.component';
import { ListingModule } from './listing/listing.module';
import { ListingService } from './listing/listing.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ListingModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
