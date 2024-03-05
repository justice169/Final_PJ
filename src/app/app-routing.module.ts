import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMIComponent } from './bmi/bmi.component';
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
import { ChestBodyweightComponent } from './chest-bodyweight/chest-bodyweight.component';
import { ChestDumbbellsComponent } from './chest-dumbbells/chest-dumbbells.component';
import { AbdomenBodyweightComponent } from './abdomen-bodyweight/abdomen-bodyweight.component';
import { AbdomenDumbbellsComponent } from './abdomen-dumbbells/abdomen-dumbbells.component';
import { BackDumbbellsComponent } from './back-dumbbells/back-dumbbells.component';
import { BackBodyweightComponent } from './back-bodyweight/back-bodyweight.component';
import { ThinComponent } from './thin/thin.component';
import { FatComponent } from './fat/fat.component';

const routes: Routes = [

  {path: '', component : HomeComponent},
  {path: 'BMI', component : BMIComponent},
  {path: 'Art', component : ArticleMainComponent},
  {path: 'Nut', component : NutritionComponent},
  {path: 'Work', component : WorkoutComponent},
  {path: 'Art-Con1', component : ArticleContentComponent},
  {path: 'Art-Con2', component : ArticleContent01Component},
  {path: 'Art-Con3', component : ArticleContent02Component},
  {path: 'Art-Con4', component : ArticleContent03Component},
  {path: 'Art-Con5', component : ArticleContent04Component},
  {path: 'Art-Con6', component : ArticleContent05Component},
  {path: 'Cbody', component : ChestBodyweightComponent},
  {path: 'Cdumb', component : ChestDumbbellsComponent},
  {path: 'Abody', component : AbdomenBodyweightComponent},
  {path: 'Adumb', component : AbdomenDumbbellsComponent},
  {path: 'Bbody', component : BackBodyweightComponent},
  {path: 'Thin', component : ThinComponent},
  {path: 'Fat', component : FatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
