import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({

  //The method is called forRoot() because you configure the router at the application's root level.
  // The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
