import { Component, OnInit, ViewChild, ElementRef, OnDestroy,} from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscribtion: Subscription;
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient;

  constructor( private ShoppingListService:ShoppingListService) { }

  @ViewChild('addShoppingList') addShoppingList: NgForm;
  ngOnInit() {
    this.subscribtion = this.ShoppingListService.startedEditing
      .subscribe(
        (index: number) =>{
          this.editedItemIndex = index
          this.editMode = true
          this.getIngredient(this.editedItemIndex)
        }
      )
  }

  getIngredient(index:number) {
    this.editedItem = this.ShoppingListService.getIngredient(index)
    this.addShoppingList.setValue({
      name: this.editedItem.name,
      amount:this.editedItem.amount
    })
  }

  onAddIng() {
    let data = {
      name: this.addShoppingList.value.name,
      amount: this.addShoppingList.value.amount
    }
    if (this.editMode) {
      this.ShoppingListService.updateIngredients(this.editedItemIndex,data)
    } else {
      this.ShoppingListService.addIngredients(data)
    }
    this.editMode = false
    this.addShoppingList.reset()
    
  }
  onDeleteItem() {
    this.editMode = false
    this.ShoppingListService.deleteIngredient(this.editedItemIndex)
    this.addShoppingList.reset();
  }
  onClear() {
    this.editMode = false
    this.addShoppingList.reset();
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe()
  }

}
