import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recovery } from '../../shared/recovery-model';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-deleted-card',
  templateUrl: './deleted-card.component.html',
  styleUrls: ['./deleted-card.component.css']
})
export class DeletedCardComponent implements OnInit {
  recovery: Recovery[];
  subscription: Subscription;
  id: number;

  constructor(private databaseService: DatabaseService,
      			  private route: ActivatedRoute,
  	   	      private router: Router) { }

  ngOnInit() {
  	this.subscription = this.databaseService.recoveryDataChanged
  	  .subscribe(
  	  	(recovery: Recovery[]) => {
  	  	  this.recovery = recovery;
  	  	}
  	  );
  	  this.recovery = this.databaseService.getRecovery();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
