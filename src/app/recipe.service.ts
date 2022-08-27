import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from 'src/mock-recipes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // This only works with mock data, since it si synchronous, in real HTTP requests, you need async
  // getRecipes(): Recipe[] {
  //   return RECIPES;
  // }


  // Async call returns an r=observable
  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    this.messageService.add('RecipeServicxe: fetched recipes')
    return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPES.find(h => h.id === id)!;
    this.messageService.add(`RecipeServicxe: fetched recipe id=${id}`)
    return of(recipe);
  }
  constructor(private messageService: MessageService) { }
}
