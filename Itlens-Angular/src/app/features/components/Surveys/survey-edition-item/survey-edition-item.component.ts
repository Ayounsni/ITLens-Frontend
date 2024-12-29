import { Component, Input, OnInit } from '@angular/core';
import { SurveyEdition } from '../../../models/survey-edition';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-survey-edition-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './survey-edition-item.component.html',
  styleUrl: './survey-edition-item.component.css',
})
export class SurveyEditionItemComponent {
  @Input() edition!: SurveyEdition;
}
