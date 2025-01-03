import { Component, inject, OnInit } from '@angular/core';
import { Question } from '../../../models/question.model';
import { QuestionService } from '../../../services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-list',
  imports: [],
  templateUrl: './answer-list.component.html',
  styleUrl: './answer-list.component.css'
})
export class AnswerListComponent implements OnInit {

    questionId!: string; 
    question!: Question;
  
    questionService = inject(QuestionService);
    route = inject(ActivatedRoute);
  
    ngOnInit(): void {
      this.route.paramMap.subscribe(paramMap => {
        this.questionId = paramMap.get('idee')!;

        this.loadSubject();
      });
    }
  
    loadSubject(): void {
      this.questionService.getQuestionById(this.questionId).subscribe({
        next: (data) => {
          this.question = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement du question :', err);
        },
      });
    }

}
