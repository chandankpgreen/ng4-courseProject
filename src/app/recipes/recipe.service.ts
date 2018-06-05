import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken Tikka',
      'This is the recipe for Chicken tikka',
      'http://www.lakesideindianrestaurant.com.au/wp-content/uploads/2017/02/chikantikka.jpg',
      [new Ingredient('Chicken Bits', 45), new Ingredient('Garlic', 55)]
    ),
    new Recipe('Paneer Tikka'
      , 'This is the recipe for Paneer tikka',
      'http://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG',
      [new Ingredient('Paneer Bits', 35), new Ingredient('Onion', 25)]
    )
  ];

  selectedRecipe = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ings: Ingredient[]) {
    this.shoppingListService.addIngredients(ings)
  }
}
