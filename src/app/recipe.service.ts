import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from 'src/mock-recipes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // This only works with mock data, since it si synchronous, in real HTTP requests, you need async
  // getRecipes(): Recipe[] {
  //   return RECIPES;
  // }

  private recipesUrl = 'api/recipes';  // URL to web api

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  // Async call returns an r=observable
  getRecipes(): Observable<Recipe[]> {
    // const recipes = of(RECIPES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    // this.messageService.add('RecipeServicxe: fetched recipes')
    // return recipes;

    //HttpClient.get() returns the body of the response as an untyped JSON object by default. Applying the optional type specifier, <Hero[]> , adds TypeScript capabilities, which reduce errors during compile time.
    return this.http.get<Recipe[]>(this.recipesUrl)
      .pipe(
        tap(_ => this.log('fetched recipes')),
        catchError(this.handleError<Recipe[]>('getRecipes', []))
      )
  }

  getRecipe(id: number): Observable<Recipe> {
    // const recipe = RECIPES.find(h => h.id === id)!;
    // this.messageService.add(`RecipeServicxe: fetched recipe id=${id}`)
    // return of(recipe);

    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }
  /** POST: add a new recipe to the server */
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe, this.httpOptions).pipe(
      tap((newRecipe: Recipe) => this.log(`added recipe w/ id=${newRecipe.id}`)),
      catchError(this.handleError<Recipe>('addRecipe'))
    );
  }

  /** DELETE: delete the recipe from the server */
  deleteRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;

    return this.http.delete<Recipe>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted recipe id=${id}`)),
      catchError(this.handleError<Recipe>('deleteRecipe'))
    );
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** PUT: update the hero on the server */
  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions).pipe(
      tap(_ => this.log(`updated recipe id=${recipe.id}`)),
      catchError(this.handleError<any>('updateRecipe'))
    )
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RecipeServicxe: ${message}`);
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }
}
