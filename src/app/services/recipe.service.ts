import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipes.model';
import { Ingredient } from '../components/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  changedRecipes = new Subject<Recipe[]>();
  private recipes: Recipe[] = []
  
  
  GetRecipeFromDB(recipe) {
    this.recipes = recipe
    this.changedRecipes.next(this.recipes.slice())
  }
  getRecipes() {
    return this.recipes.slice()
  }
  getRecipe(id: number) {
    console.log(this.recipes);

    return this.recipes[id]
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.changedRecipes.next(this.recipes.slice())
  }
  updateRecipe(index: number, Recipe: Recipe) {
    this.recipes[index]=Recipe
    this.changedRecipes.next(this.recipes.slice())
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.changedRecipes.next(this.recipes.slice())

  }
}
