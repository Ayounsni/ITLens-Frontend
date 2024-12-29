import { Survey } from '../models/survey.model';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SurveyEdition } from '../models/survey-edition';


@Injectable({
    providedIn: 'root', // Fournit automatiquement ce service à l'application entière
  })

export class SurveyEditionService{
    private readonly url = 'http://localhost:8080/api/surveyEdition';
    http = inject(HttpClient)

    public getSurveyEditionById(id: string): Observable<SurveyEdition>{
        return this.http.get<SurveyEdition>(`${this.url}/${id}`)
    }

}