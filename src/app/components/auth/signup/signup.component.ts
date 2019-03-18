import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  @ViewChild('signupForm') signup:NgForm
  ngOnInit() {
  }
  onSigup() {
    console.log(this.signup.value);
    this.authService.signupUser(this.signup.value)
  }

}
