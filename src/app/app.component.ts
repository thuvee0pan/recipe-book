import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBSWuMMsuObARiVmrAuiJXvOnDQ8Q1FFe4",
      authDomain: "fir-2d7ce.firebaseapp.com",
    })
  }

}
