import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../components/shared/ingredient.model';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>()
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple',5),
    new Ingredient('Mango',10)

  ];
  
  constructor(private toastr: ToastrService) { }

  getIngredients() {
    return this.ingredients.slice()
  }
  getIngredient(index: number) {
    return this.ingredients[index]
  }
  addIngredients(ingredient: Ingredient) {    
    this.ingredients.push(ingredient)
    this.toastr.success('Ingredients Added Successfully')

    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.toastr.error('Ingredients Deleted Successfully')

    this.ingredientsChanged.next(this.ingredients.slice())

  }
  updateIngredients(index:number,newingredient: Ingredient) {    
    this.ingredients[index] = newingredient
    this.toastr.success('Ingredients Updated Successfully')

    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
