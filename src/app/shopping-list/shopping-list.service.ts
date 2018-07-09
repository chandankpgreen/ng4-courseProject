import { Ingredient } from "../shared/ingredient.model";
// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService  {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Onions', 5),
    new Ingredient('Sesame seeds', 15)
  ]
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient){
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]){
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

 
}

