import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { AuthService } from 'src/app/components/auth/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Recipe } from 'src/app/components/recipes/recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private storageSer:DataStorageService, private authSer:AuthService,private recipeSer:RecipeService) { }

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
      (res:HttpResponse<Recipe[]>) => {
        this.recipeSer.GetRecipeFromDB(res.body)
        },
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
