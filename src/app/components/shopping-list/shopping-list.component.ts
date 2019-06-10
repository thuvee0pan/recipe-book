import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = []
  Subscription: Subscription;

  constructor( private ShoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.Subscription = this.ShoppingListService.ingredientsChanged
      .subscribe(
          (ingredients) => this.ingredients = ingredients
    )
  }
  onEdit(id:number) {
    this.ShoppingListService.startedEditing.next(id)
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }
  // onDelete(i:number) {
  //   console.log(i);
    
  //   this.ShoppingListService.deleteIngredient(i)

  // }

 
}
