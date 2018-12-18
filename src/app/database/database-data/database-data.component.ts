import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Database } from '../../shared/database-model';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-database-data',
  templateUrl: './database-data.component.html',
  styleUrls: ['./database-data.component.css']
})
export class DatabaseDataComponent implements OnInit {
  database: Database[];
  subscription: Subscription;
 
  constructor(private databaseService: DatabaseService,
          private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.databaseService.dataChanged
      .subscribe(
        (data: Database[]) => {
          this.database = data;
        }
      );
      this.database = this.databaseService.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
