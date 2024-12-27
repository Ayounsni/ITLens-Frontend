import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SurveyListComponent } from './features/components/Surveys/survey-list/survey-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Itlens-Angular';
}
