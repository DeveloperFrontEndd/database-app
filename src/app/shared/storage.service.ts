import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Database } from './database-model';
import { DatabaseService } from './database.service';

@Injectable()
export class StorageService {
  
  constructor(private http: Http, private databaseService: DatabaseService) {}

  storeCard() {
  	return this.http.put('https://database-final-http.firebaseio.com/data.json',
	this.databaseService.getData());
  }

  getCard() {
    return this.http.get('https://database-final-http.firebaseio.com/data.json') 
      .subscribe(
        (response: Response) => {
          const database: Database[] = response.json();
          this.databaseService.setData(database);
          console.log(database);
        }
      );
  }

}