import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { HomeComponent } from './home/home.component';
import { DaysComponent } from './days/days.component';
import { WorkoutsComponent } from './workouts/workouts.component';


@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    WorkoutFormComponent,
    HomeComponent,
    DaysComponent,
    WorkoutsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: 'home', component: HomeComponent,
        children: [
          { path: '', component: DaysComponent},
          { path: 'workouts', component: WorkoutsComponent },
          { path: 'add/:workout', component: WorkoutFormComponent }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
