import { Routes } from '@angular/router';
import { SurveyListComponent } from './features/components/Surveys/survey-list/survey-list.component';
import { AppComponent } from './app.component';
import { SurveyEditionDetailComponent } from './features/components/SurveyEditions/survey-edition-detail/survey-edition-detail.component';
import { QuestionListComponent } from './features/components/Questions/question-list/question-list.component';
import { AnswerListComponent } from './features/components/Answers/answer-list/answer-list.component';

export const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: '', redirectTo: '/surveys', pathMatch: 'full' },
  {
    path: 'surveyEdition/:id',
    component: SurveyEditionDetailComponent,
    children: [
      { path: 'subject/:ide', component: QuestionListComponent,
        children:[
          { path: 'question/:idee', component: AnswerListComponent }
        ]
      },
    ],
  },
];
