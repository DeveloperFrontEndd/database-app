import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { StorageService } from '../../shared/storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-database-message',
  templateUrl: './database-message.component.html',
  styleUrls: ['./database-message.component.css']
})
export class DatabaseMessageComponent implements OnInit {


  constructor(private storageService: StorageService, authService: AuthService) { }

  ngOnInit() {
  }

  onSave() {
    this.storageService.storeCard()
  	  .subscribe(
  	  	(response: Response) => {
  	  	  console.log(response);
  	  	}
  	  );
  }

  onFetch() {
    this.storageService.getCard();
  }

}
