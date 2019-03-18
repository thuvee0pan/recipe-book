import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private storageSer:DataStorageService, private authSer:AuthService) { }

  ngOnInit() {
  }
  onSaveData() {
    this.storageSer.storeRecipes().subscribe(
      (res) => console.log(res),
      (err)=>console.log(err)
    )
  }
  getData() {
    this.storageSer.fetchData().subscribe(
      (res) => console.log(res),
      (err)=>console.log(err)
    )
  }
  isAuth() {
    return this.authSer.isAuth()
  }
  logOut() {
    this.authSer.logout()
  }
}
