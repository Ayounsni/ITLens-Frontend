import { Component, Input } from '@angular/core';
import { SurveyEdition } from '../../../models/survey-edition';
import { SurveyEditionItemComponent } from '../survey-edition-item/survey-edition-item.component';

@Component({
  selector: 'app-survey-edition-list',
  standalone: true,
  imports: [SurveyEditionItemComponent],
  templateUrl: './survey-edition-list.component.html',
  styleUrl: './survey-edition-list.component.css',
})
export class SurveyEditionListComponent {
  @Input() editions: SurveyEdition[] = [];
}
