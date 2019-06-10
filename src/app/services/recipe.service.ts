import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipes.model';
import { Ingredient } from '../components/shared/ingredient.model';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private toastr: ToastrService) { }

  changedRecipes = new Subject<Recipe[]>();
  private recipes: Recipe[] = []
  
  
  GetRecipeFromDB(recipe:Recipe[]) {
    this.recipes = recipe
    this.changedRecipes.next(this.recipes)
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
    this.toastr.success('Recipe Created')
    this.changedRecipes.next(this.recipes.slice())
  }
  updateRecipe(index: number, Recipe: Recipe) {
    this.recipes[index]=Recipe
    this.toastr.success('Recipe Edited')

    this.changedRecipes.next(this.recipes.slice())
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.toastr.error('Recipe Deleted')

    this.changedRecipes.next(this.recipes.slice())

  }
}
