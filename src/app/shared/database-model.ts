export class Database {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  imagePath: string;
  city: string;
  state: string;

  constructor(name: string, surname: string, email: string, 
  			  age: number, imagePath: string, city: string, state: string)
  {
  	this.firstName = name;
  	this.lastName = surname;
  	this.email = email;
  	this.age = age;
  	this.imagePath = imagePath;
  	this.city = city;
  	this.state = state;
  }	
}