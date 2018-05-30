import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Chicken Tikka', 'This is the recipe for Chicken tikka', 'http://www.lakesideindianrestaurant.com.au/wp-content/uploads/2017/02/chikantikka.jpg'),
    new Recipe('Paneer Tikka','This is the recipe for Paneer tikka','http://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG')
  ];
  constructor() { }

  ngOnInit() {
  }

}
