import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KinveyModule } from 'kinvey-angular-sdk';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingComponent } from './landing/landing.component';
import { ListingModule } from './listing/listing.module';
import { ListingService } from './listing/listing.service';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { UserServiceLH } from './user/user.service';
import { NotFoundComponent } from './not-found/not-found.component';





@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ListingModule,
    UserModule,
    HttpClientModule,
    KinveyModule.init({
      appKey: 'kid_H1d8X3prX',
      appSecret: '9cb8637474184a44a038cba964ad90de'
    })
  ],
  providers: [ListingService, UserServiceLH],
  bootstrap: [AppComponent]
})
export class AppModule { }
