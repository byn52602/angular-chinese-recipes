import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];
  // selectedRecipe?: Recipe;

  getRecipes(): void {
    // The assignment occurs synchronously
    // this.heroes = this.heroService.getHeroes();

    //The new version waits for the Observable to emit the array of heroes, which could happen now or several minutes from now. 
    //   The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes)
  }
  // No longer used:
  // onSelect(recipe: Recipe): void {
  //   this.selectedRecipe = recipe;
  //   this.messageService.add(`RecipesComponent: Selected Recipe is = ${recipe.id}`)
  // }

  //Reserve the constructor for minimal initialization such as wiring constructor parameters to properties. The constructor shouldn't do anything. 
  //It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
  constructor(
    private recipeService: RecipeService,
    // private messageService: MessageService
  ) { }


  // The ngOnInit() is a lifecycle hook. 
  // Angular calls ngOnInit() shortly after creating a component. 
  // It's a good place to put initialization logic.

  //Instead, call getHeroes() inside the ngOnInit lifecycle hook and let Angular 
  //   call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  ngOnInit(): void {
    this.getRecipes();
  }

}
