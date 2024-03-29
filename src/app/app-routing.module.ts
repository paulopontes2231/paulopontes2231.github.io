import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IsItMondayComponent } from './components/is-it-monday/is-it-monday.component';
import { HomeComponent } from './home/home.component';
import { PlayerRaterComponent } from './components/player-rater/player-rater.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';

const routes: Routes = [{ path: 'isItMonday', component: IsItMondayComponent}, { path: '',component: HomeComponent},
                        { path: 'playerRater', component: PlayerDashboardComponent}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
