import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IsItMondayComponent } from './components/is-it-monday/is-it-monday.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: 'isItMonday', component: IsItMondayComponent}, { path: '',component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
