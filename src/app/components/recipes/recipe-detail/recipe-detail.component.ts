import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 
  recipe: Recipe;
  id: number;
  
  constructor(private slService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id)   
        
      }
    )
    
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
  addToSHoppingList() {
    this.recipe.ingredients.map((Ingredient)=> this.slService.addIngredients(Ingredient))
  }

}
