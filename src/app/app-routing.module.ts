import { Routes, RouterModule } from "@angular/router"
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { NgModule } from "@angular/core";

const appRoutes: Routes = [
    {
        path: "recipes", component: RecipesComponent, children: [
            { path: ":id", component: RecipeDetailComponent }
        ]
    },
    { path: "shoppinglist", component: ShoppingListComponent }
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutes {

}