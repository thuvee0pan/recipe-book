import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { AuthService } from '../components/auth/auth.service';
import { Recipe } from '../components/recipes/recipes.model';
const httpHeaders =  new HttpHeaders({
    'Content-Type':  'application/json',
    // 'Authorization': 'my-auth-token'
  })
 
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient, private recipeSer:RecipeService) { }
  RecipebaseUrl = "https://fir-2d7ce.firebaseio.com/recipe.json"

  storeRecipes() {
    // return this.http.put(this.RecipebaseUrl, this.recipeSer.getRecipes(), {
    //   observe: 'events',
    //   // headers: httpHeaders
    //   params: new HttpParams().set('auth',tk)
    // })
    
    const req = new HttpRequest('PUT', this.RecipebaseUrl, this.recipeSer.getRecipes(), {reportProgress: true})
   return  this.http.request(req)
  }

  fetchData() {
     return this.http.get<Recipe[]>(this.RecipebaseUrl)
      .pipe(map(
      (res) => { 
       this.recipeSer.GetRecipeFromDB(res)
          // console.log(res);
      }
    ))
  }
}
