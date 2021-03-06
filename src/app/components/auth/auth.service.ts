import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor(private router:Router, private toastr: ToastrService) { }
  signupUser(data:{email: string, password: string}) {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.router.navigate(['/signin'])
        this.toastr.success('User Created Successfully')
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
  signinUser(data:{email: string, password: string}) {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        this.router.navigate(['/'])
        firebase.auth().currentUser.getIdToken().then(
          (token:string)=>this.token = token
        )
    })
    .catch((err) => console.log(err))
  }
  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token:string)=>this.token = token
    )
    return this.token
  }
  isAuth() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null
  }
}
