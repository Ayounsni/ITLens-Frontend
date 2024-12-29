import { Subject } from '../../../models/subject.model';
import { Subsubject } from './../../../models/subsubject.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-item',
  imports: [],
  standalone:true,
  templateUrl: './subject-item.component.html',
  styleUrl: './subject-item.component.css'
})
export class SubjectItemComponent {
  @Input() subsubjects: Subject[] = [];
}
