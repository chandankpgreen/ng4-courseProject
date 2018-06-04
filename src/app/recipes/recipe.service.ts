import { Recipe } from "./recipe.model";


export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken Tikka', 'This is the recipe for Chicken tikka', 'http://www.lakesideindianrestaurant.com.au/wp-content/uploads/2017/02/chikantikka.jpg'),
    new Recipe('Paneer Tikka','This is the recipe for Paneer tikka','http://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG')
  ];
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
