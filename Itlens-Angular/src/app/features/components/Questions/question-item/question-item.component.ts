import { Component, Input } from '@angular/core';
import { Question } from '../../../models/question.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question-item',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.css'
})
export class QuestionItemComponent {
  @Input() questions: Question[] = [];
  @Input() surveyEditionId!: string;
  @Input() subjectId!: string;

}
