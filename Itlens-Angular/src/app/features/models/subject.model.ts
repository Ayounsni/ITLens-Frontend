import { Question } from './question.model';
export interface Subject {
    id: string; 
    title: string;
    subSubjects: Subject[];
    isSubSubjectsVisible: boolean;
    questions: Question[];
  }