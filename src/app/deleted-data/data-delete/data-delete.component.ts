import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DatabaseService } from '../../shared/database.service';
import { Recovery } from '../../shared/recovery-model';

@Component({
  selector: 'app-data-delete',
  templateUrl: './data-delete.component.html',
  styleUrls: ['./data-delete.component.css']
})
export class DataDeleteComponent implements OnInit {
  recovery: Recovery;
  id: number;

  constructor( private databaseService: DatabaseService,
  			       private route: ActivatedRoute,
  			       private router: Router) { }

  ngOnInit() {
  	this.route.params
  	  .subscribe(
  	  	(params: Params) => {
  	  	  this.id = +params['id'];
  	  	  this.recovery = this.databaseService.getIndex(this.id);
  	  	}
  	  );
  }

  onDelete() {
  	this.databaseService.deleteForever(this.id);
  	this.router.navigate(['/deleted-data']);
  }

  undoDelete() {
    this.databaseService.undoDelete(this.recovery);
    this.databaseService.deleteForever(this.id);
    this.router.navigate(['/deleted-data']);
  }
}
