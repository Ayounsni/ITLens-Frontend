import { Subsubject } from './subsubject.model';
export interface Subject {
    id: string; 
    title: string;
    subSubjects: Subject[];
  }