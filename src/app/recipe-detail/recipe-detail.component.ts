import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  // @Input() recipe?: Recipe;
  constructor(
    private route: ActivatedRoute, //holds information about the route to this instance of the RecipeDetailComponent
    private recipeService: RecipeService, //gets hero data from the remote server and this component uses it to get the recipe-to-display.
    private location: Location //an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  ) { }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getRecipe();
  }

}
