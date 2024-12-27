import { Component, Input } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { SurveyEditionListComponent } from '../survey-edition-list/survey-edition-list.component';

@Component({
  selector: 'app-survey-item',
  standalone: true,
  imports: [SurveyEditionListComponent],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css',
})
export class SurveyItemComponent {
  @Input() survey!: Survey;
}
