import { Component, Input } from '@angular/core';
import { Subject } from '../../../models/subject.model';
import { SubjectItemComponent } from '../subject-item/subject-item.component';

@Component({
  selector: 'app-subject-list',
  imports: [SubjectItemComponent],
  standalone:true,
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  @Input() subjects: Subject[] = [];
}
