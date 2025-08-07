import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbCarousel, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './components/landing/landing.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { IsItMondayComponent } from './components/is-it-monday/is-it-monday.component';
import { HomeComponent } from './home/home.component';
import { PlayerRaterComponent } from './components/player-rater/player-rater.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { PlayerDashboardComponent } from './components/player-dashboard/player-dashboard.component';
import { PlayerDashboardDetailComponent } from './components/player-dashboard/player-dashboard-detail/player-dashboard-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { FormsModule } from '@angular/forms';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { GameOfLifeComponent } from './components/game-of-life/game-of-life.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectComponent } from "./components/project/project.component";
import { JobComponent } from './components/job/job.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JokerComponent } from './components/joker/joker.component';
import { OptionComponent } from './components/joker/option/option.component';
import { LifelinesComponent } from './components/joker/lifelines/lifelines.component';
import { LevelsComponent } from './components/joker/levels/levels.component';
import { QuestionComponent } from './components/joker/question/question.component';


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
    PlayerRaterComponent,
    InstructionsComponent,
    PlayerDashboardComponent,
    PlayerDashboardDetailComponent,
    SudokuComponent,
    CurriculumComponent,
    GameOfLifeComponent,
    SkillComponent,
    JokerComponent,
    OptionComponent,
    LifelinesComponent,
    LevelsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgbModule,
    MatSortModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ProjectComponent,
    JobComponent,
    MatSnackBarModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
