import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { C404Component } from './components/c404/c404.component';
import { CalculatorComponent } from './components/pages/calculator/calculator.component';
import { TableComponent } from './components/pages/table/table.component';
import { RecipesComponent } from './components/pages/recipes/recipes.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorIMCComponent } from './components/pages/calculator/calculator-imc/calculator-imc.component';
import { CalculatorKcalComponent } from './components/pages/calculator/calculator-kcal/calculator-kcal.component';
import { CalculatorBurnComponent } from './components/pages/calculator/calculator-burn/calculator-burn.component';
import { FactorsComponent } from './components/pages/blog/factors/factors.component';
import { DoseComponent } from './components/pages/blog/dose/dose.component';
import { KeysComponent } from './components/pages/blog/keys/keys.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    C404Component,
    CalculatorComponent,
    TableComponent,
    RecipesComponent,
    BlogComponent,
    CalculatorIMCComponent,
    CalculatorKcalComponent,
    CalculatorBurnComponent,
    FactorsComponent,
    DoseComponent,
    KeysComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
