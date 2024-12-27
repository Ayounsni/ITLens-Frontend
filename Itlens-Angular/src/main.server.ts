import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { SurveyListComponent } from './app/features/components/Surveys/survey-list/survey-list.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
