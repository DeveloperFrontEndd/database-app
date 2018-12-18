import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	firebase.initializeApp({
  	  apiKey: "AIzaSyCxFq5V5oo29lespexxvcl3iY4IP5eDfZM",
      authDomain: "database-final-http.firebaseapp.com"
  	});
  }

  onSignout() {
    this.authService.signOut();
  }
}
