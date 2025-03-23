import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IsItMondayComponent } from './components/is-it-monday/is-it-monday.component';
import { HomeComponent } from './home/home.component';
import { PlayerRaterComponent } from './components/player-rater/player-rater.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

const routes: Routes = [{ path: 'isItMonday', component: IsItMondayComponent}, { path: '',component: HomeComponent},
                        { path: 'playerRater', component: PlayerDashboardComponent}, { path: 'sudoku-solver', component: SudokuComponent},
                        {path: 'curriculum', component: CurriculumComponent}, {path: 'quoteguesser', component: PlayerDashboardComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
