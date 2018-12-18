import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Database } from '../shared/database-model';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  dataSend: boolean = false;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.dataSend = true;
    const value = form.value;
    const newData = new Database(value.firstName, value.lastName, value.email, value.age, value.imagePath, value.city, value.state);

      if (this.dataSend) {
        this.databaseService.addData(newData);
      }

      form.resetForm();
  }


  }
