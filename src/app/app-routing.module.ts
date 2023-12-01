import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BMIComponent } from './bmi/bmi.component';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'Home', component : HomeComponent},
  {path: 'BMI', component : BMIComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
