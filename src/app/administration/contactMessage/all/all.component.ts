import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/administration/administration.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private administrationService: AdministrationService) { }

  ngOnInit() {
    this.administrationService.getAllMessags();
  }

  get allMessages(){ return this.administrationService.messages}

  removeMessage(id){
    this.administrationService.deleteMessage(id);
  }
}
