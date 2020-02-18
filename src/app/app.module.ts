import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KinveyModule } from 'kinvey-angular-sdk';
import { NotifierModule, NotifierOptions } from "angular-notifier";


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
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AdministrationModule } from './administration/administration.module';
import { AllComponent } from './contactMessage/all/all.component';





/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'top',
			distance: 60,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    AllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ListingModule,
    UserModule,
    AdministrationModule,
    HttpClientModule,
    NotifierModule.withConfig(customNotifierOptions),
    KinveyModule.init({
      appKey: 'kid_H1d8X3prX',
      appSecret: '9cb8637474184a44a038cba964ad90de'
    })
  ],
  providers: [ListingService, UserServiceLH],
  bootstrap: [AppComponent]
})
export class AppModule { }
