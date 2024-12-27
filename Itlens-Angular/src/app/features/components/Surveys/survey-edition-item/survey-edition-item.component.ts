import { Component, Input, OnInit } from '@angular/core';
import { SurveyEdition } from '../../../models/survey-edition';

@Component({
  selector: 'app-survey-edition-item',
  standalone: true,
  imports: [],
  templateUrl: './survey-edition-item.component.html',
  styleUrl: './survey-edition-item.component.css',
})
export class SurveyEditionItemComponent {
  @Input() edition!: SurveyEdition;
}
