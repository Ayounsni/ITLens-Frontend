import { SurveyEditionService } from './../../../services/surveyEdition.service';
import { Component, inject } from '@angular/core';
import { SurveyEdition } from '../../../models/survey-edition';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { SubjectListComponent } from '../../Subjects/subject-list/subject-list.component';
import { QuestionListComponent } from "../../Questions/question-list/question-list.component";

@Component({
  selector: 'app-survey-edition-detail',
  standalone: true,
  imports: [SubjectListComponent, RouterOutlet],
  templateUrl: './survey-edition-detail.component.html',
  styleUrl: './survey-edition-detail.component.css'
})
export class SurveyEditionDetailComponent {

  surveyEditionId!: string; 
  surveyEdition!: SurveyEdition;

    surveyEditionService = inject(SurveyEditionService);
    route = inject(ActivatedRoute)

    ngOnInit(): void {
      // Récupérer l'ID depuis l'URL
      this.surveyEditionId = this.route.snapshot.paramMap.get('id')!;

      this.surveyEditionService.getSurveyEditionById(this.surveyEditionId).subscribe({
        next: (data) => {
          this.surveyEdition = data;
        },
        error: (err) => {
          console.log('Error' + err);
        },
      });
      
    }

}
