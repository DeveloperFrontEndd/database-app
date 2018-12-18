import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-database-edit',
  templateUrl: './database-edit.component.html',
  styleUrls: ['./database-edit.component.css']
})
export class DatabaseEditComponent implements OnInit {
  formData: FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(private databaseService: DatabaseService,
      			  private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	this.route.params
  	  .subscribe(
  	  	(params: Params) => {
  	  	  this.id = +params['id'];
  	  	  this.editMode = params['id'] != null;
  	  	  this.initForm();
  	  	}
  	  );
  }

  private initForm() {
  	let name = '';
  	let surname = '';
  	let email = '';
  	let age: number;
  	let imagePath = '';
  	let city = '';
  	let state = '';

  	if (this.editMode) {
  	  const currentData = this.databaseService.getPosition(this.id)
  	  	name = currentData.firstName;
  	  	surname = currentData.lastName;
  	  	email = currentData.email;
  	  	age = currentData.age;
  	  	imagePath = currentData.imagePath;
  	  	city = currentData.city;
  	  	state = currentData.state;	
  	}

  	this.formData = new FormGroup({
  	  "firstName": new FormControl(name, Validators.required),
  	  "lastName": new FormControl(surname, Validators.required),
  	  "email": new FormControl(email, [Validators.required, Validators.email]),
  	  "age": new FormControl(age, Validators.required),
  	  "imagePath": new FormControl(imagePath, Validators.required),
  	  "city": new FormControl(city, Validators.required),
  	  "state": new FormControl(state, Validators.required)
  	});
  }

  onUpdate() {
  	this.databaseService.updateData(this.id, this.formData.value);
  }

  recoveryData() {
    this.databaseService.recoveryData(this.formData.value);
    this.databaseService.deleteData(this.id);
    this.router.navigate(['/database']);
  }

  onCancel() {
    this.router.navigate(['/database']);
  }

}
