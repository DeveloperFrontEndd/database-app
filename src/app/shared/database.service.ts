import { Subject } from 'rxjs';

import { Recovery } from './recovery-model';
import { Database } from './database-model';

export class DatabaseService {
  dataChanged = new Subject<Database[]>();
  recoveryDataChanged = new Subject<Recovery[]>();  
  database: Database[] = [
  	new Database (
  	'James',
  	'Jones',
  	'james.jones@gmail.com',
  	27,
  	'https://static1.squarespace.com/static/57809f1fe6f2e12e1da3e283/57831f13ff7c501754f8277e/5783ed52be6594e480439023/1525374381229/Headshots_Men91.jpg?format=300w',
  	'Los Angeles',
  	'California'
  	),
  	new Database (
  	'Robert',
  	'Wilson',
  	'wilson.robert@outlook.com',
  	35,
  	'https://www.catholic.edu/media/publicaffairs/res/images/faculty-experts/profiles/pecknold-chad-250x324.jpg',
  	'London',
  	'United Kingdom'
  	)
  ];

  getData() {
  	return this.database.slice();
  }

  getPosition(index: number) {
  	return this.database[index];
  }
  
  setData(data: Database[]) {
    this.database = data;
    this.dataChanged.next(this.database.slice());
  }

  addData(newData: Database) {
  	return this.database.push(newData);
  }

  updateData(index: number, newData: Database) {
    this.database[index] = newData;
    this.dataChanged.next(this.database.slice());
  }

  deleteData(index: number) {
  	this.database.splice(index, 1);
  	this.dataChanged.next(this.database.slice());
  }

  recoveryDatabase: Recovery[] = [];

  getRecovery() {
    return this.recoveryDatabase.slice();
  }

  getIndex(index: number) {
    return this.recoveryDatabase[index];
  }

  recoveryData(recoveryDatabase: Recovery) {
    return this.recoveryDatabase.push(recoveryDatabase);
  }

  deleteForever(index: number) {
    this.recoveryDatabase.splice(index, 1);
    this.recoveryDataChanged.next(this.recoveryDatabase.slice());
  }

  undoDelete(recoveryDatabase: Recovery) {
    return this.database.push(recoveryDatabase);
  }
}