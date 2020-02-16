import { Component, OnInit } from '@angular/core';
import { ListingService } from './listing/listing.service';
import { IListing } from './shared/Interfaceses/listing';
import { NotifierService } from 'angular-notifier';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //''
})
export class AppComponent implements OnInit {

constructor(private listingService: ListingService, private notifier: NotifierService){}

  ngOnInit(): void {
    if(this.listingService.selectedListing == null){
      this.listingService.selectedListing = JSON.parse(localStorage.getItem('currentListing')) as IListing;
      console.log(this.listingService.selectedListing);
      
    }
  }
  title = 'luxury-homes';

  public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}

	/**
	 * Hide oldest notification
	 */
	public hideOldestNotification(): void {
		this.notifier.hideOldest();
	}

	/**
	 * Hide newest notification
	 */
	public hideNewestNotification(): void {
		this.notifier.hideNewest();
	}

	/**
	 * Hide all notifications at once
	 */
	public hideAllNotifications(): void {
		this.notifier.hideAll();
	}

	/**
	 * Show a specific notification (with a custom notification ID)
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 * @param {string} id      Notification ID
	 */
	public showSpecificNotification( type: string, message: string, id: string ): void {
		this.notifier.show( {
			id,
			message,
			type
		} );
	}

	/**
	 * Hide a specific notification (by a given notification ID)
	 *
	 * @param {string} id Notification ID
	 */
	public hideSpecificNotification( id: string ): void {
		this.notifier.hide( id );
	}
}
