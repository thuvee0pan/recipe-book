import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipes.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
     private recipeSer:RecipeService,
      private router:Router,
      ) {
       }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm()
    })

  }
  private initForm() {
    
    let recipeName = '';
    let imgPath = '';
    let desc = '';
    let RecipeIngredients = new FormArray([])
    if (this.editMode) {
      const Recipe:Recipe = this.recipeSer.getRecipe(this.id)
      recipeName = Recipe.name
      imgPath = Recipe.imgPath
      desc = Recipe.description
      if (Recipe['ingredients']) {
        for (const ingrediant of Recipe.ingredients) {
          RecipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingrediant.name,Validators.required),
              'amount': new FormControl(ingrediant.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
            )
        }
        
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgPath': new FormControl(imgPath, Validators.required),
      'description': new FormControl(desc, Validators.required),
      'ingredients':  RecipeIngredients
    })
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onSubmit() {
  
    if (this.editMode) {
      this.recipeSer.updateRecipe(this.id, this.recipeForm.value)
      this.router.navigate(['recipes',this.id])
    } else {
      this.recipeSer.addRecipe(this.recipeForm.value)

    }
    this.router.navigate(['../'],{relativeTo:this.route})

    
    
  }
  addIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  onCancel() {
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  onDeleteIngredients(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

}
