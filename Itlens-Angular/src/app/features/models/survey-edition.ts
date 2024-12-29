import { Subject } from "./subject.model";

export interface SurveyEdition {
    id: string;
    creationDate: string; // ou Date si vous souhaitez utiliser le type Date
    startDate: string; // ou Date si vous souhaitez utiliser le type Date
    year: number;
    subjects: Subject[];
  }