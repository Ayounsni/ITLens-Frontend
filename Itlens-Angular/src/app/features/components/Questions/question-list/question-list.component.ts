import { Component, inject, OnInit } from '@angular/core';
import { Question } from '../../../models/question.model';
import { SubjectService } from '../../../services/subject.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from '../../../models/subject.model';
import { QuestionItemComponent } from '../question-item/question-item.component';

@Component({
  selector: 'app-question-list',
  imports: [QuestionItemComponent,RouterOutlet],
  standalone:true,
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit {

  subjectId!: string; 
  surveyEditionId!:string;
  subject!: Subject;

  subjectService = inject(SubjectService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Surveiller les changements dans l'URL
    this.route.paramMap.subscribe(paramMap => {
      const parentParams = this.route.parent?.snapshot.paramMap;
      this.subjectId = paramMap.get('ide')!;
      this.surveyEditionId = parentParams?.get('id')!;

      // Charger les données de la question
      this.loadSubject();
    });
  }

  loadSubject(): void {
    this.subjectService.getSubjectById(this.subjectId).subscribe({
      next: (data) => {
        this.subject = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement du sujet :', err);
      },
    });
  }
}
