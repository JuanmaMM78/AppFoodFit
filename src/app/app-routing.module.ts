import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { CalculatorIMCComponent } from './components/pages/calculator/calculator-imc/calculator-imc.component';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { TableComponent } from './components/pages/table/table.component';
import { CalculatorKcalComponent } from './components/pages/calculator/calculator-kcal/calculator-kcal.component';
import { CalculatorBurnComponent } from './components/pages/calculator/calculator-burn/calculator-burn.component';
import { DoseComponent } from './components/pages/blog/dose/dose.component';
import { FactorsComponent } from './components/pages/blog/factors/factors.component';
import { KeysComponent } from './components/pages/blog/keys/keys.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'calculators',
    component: CalculatorComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'IMC' },
      { path: 'IMC', component: CalculatorIMCComponent },
      { path: 'kcal', component: CalculatorKcalComponent },
      { path: 'burn', component: CalculatorBurnComponent },
    ],
  },
  { path: 'tables', component: TableComponent },
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'factors' },
      { path: 'dose', component: DoseComponent },
      { path: 'factors', component: FactorsComponent },
      { path: 'keys', component: KeysComponent },
    ],
  },
  { path: '**', component: C404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
