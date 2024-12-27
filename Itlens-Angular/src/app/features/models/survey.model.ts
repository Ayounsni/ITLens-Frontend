import { Owner } from "./owner.model";
import { SurveyEdition } from "./survey-edition";

export interface Survey {
    id: string; 
    title: string;
    description: string;
    owner: Owner;
    surveyEditions: SurveyEdition[];
  }