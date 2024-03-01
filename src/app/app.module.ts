import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BMIComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles/articles.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { WorkoutComponent } from './workout/workout.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleContent01Component } from './article-content01/article-content01.component';
import { ArticleContent02Component } from './article-content02/article-content02.component';
import { ArticleContent03Component } from './article-content03/article-content03.component';
import { ArticleContent04Component } from './article-content04/article-content04.component';
import { ArticleContent05Component } from './article-content05/article-content05.component';
import { ArticleMainComponent } from './article-main/article-main.component';
import { AbdomenBodyweightComponent } from './abdomen-bodyweight/abdomen-bodyweight.component';
import { AbdomenDumbbellsComponent } from './abdomen-dumbbells/abdomen-dumbbells.component';
import { ChestBodyweightComponent } from './chest-bodyweight/chest-bodyweight.component';
import { ChestDumbbellsComponent } from './chest-dumbbells/chest-dumbbells.component';
import { BackBodyweightComponent } from './back-bodyweight/back-bodyweight.component';
import { BackDumbbellsComponent } from './back-dumbbells/back-dumbbells.component';


@NgModule({
  declarations: [
    AppComponent,
    BMIComponent,
    HomeComponent,
    ArticlesComponent,
    NutritionComponent,
    WorkoutComponent,
    ArticleContentComponent,
    ArticleContent01Component,
    ArticleContent02Component,
    ArticleContent03Component,
    ArticleContent04Component,
    ArticleContent05Component,
    ArticleMainComponent,
    AbdomenBodyweightComponent,
    AbdomenDumbbellsComponent,
    ChestBodyweightComponent,
    ChestDumbbellsComponent,
    BackBodyweightComponent,
    BackDumbbellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
