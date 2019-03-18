import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  @ViewChild('signinForm') signin:NgForm

  ngOnInit() {
  }

  onSigin() {
    this.authService.signinUser(this.signin.value)
  }
}
