import { Component, inject, OnInit } from '@angular/core';
import { Survey } from '../../../models/survey.model';
import { SurveyService } from '../../../services/survey.service';
import { SurveyItemComponent } from '../survey-item/survey-item.component';
import { ActivatedRoute } from '@angular/router';
import { SurveyFormComponent } from '../../Forms/survey-form/survey-form.component';

@Component({
  selector: 'app-survey-list',
  imports: [SurveyItemComponent,SurveyFormComponent],
  standalone: true,
  templateUrl: './survey-list.component.html',
  styleUrl: './survey-list.component.css',
})
export class SurveyListComponent implements OnInit {
  surveys!: Survey[];
  surveysService = inject(SurveyService);
  isPopupVisible = false;

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  ngOnInit() {
    this.surveysService.getSurveys().subscribe({
      next: (data) => {
        this.surveys = data;
      },
      error: (err) => {
        console.log('Error' + err);
      },
    });
  }
}
