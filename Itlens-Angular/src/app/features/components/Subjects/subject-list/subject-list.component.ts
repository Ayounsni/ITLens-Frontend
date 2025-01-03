import { Component, Input } from '@angular/core';
import { Subject } from '../../../models/subject.model';
import { SubjectItemComponent } from '../subject-item/subject-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  imports: [SubjectItemComponent,RouterLink],
  standalone:true,
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  @Input() subjects: Subject[] = [];
  @Input() surveyEditionId!: string;
  
  toggleVisibility(subject: Subject) {
    subject.isSubSubjectsVisible = !subject.isSubSubjectsVisible;
  }
}
