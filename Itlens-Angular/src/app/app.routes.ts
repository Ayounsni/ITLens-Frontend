import { Routes } from '@angular/router';
import { SurveyListComponent } from './features/components/Surveys/survey-list/survey-list.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './features/components/footer/footer.component';

export const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  { path: 'yassir', component: FooterComponent },
];
