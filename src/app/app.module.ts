import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IsItMondayComponent } from './components/is-it-monday/is-it-monday.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SkillsetComponent,
    RecentProjectsComponent,
    ExperienceComponent,
    IsItMondayComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
