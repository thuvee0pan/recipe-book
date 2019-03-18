import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  Subscription: Subscription;

  constructor(private recipeServer:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeServer.getRecipes()
    this.Subscription = this.recipeServer.changedRecipes.subscribe(
      (recipes:Recipe[])=> this.recipes  = recipes
    )
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }


 

}
