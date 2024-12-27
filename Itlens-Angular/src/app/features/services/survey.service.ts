import { Survey } from './../models/survey.model';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root', // Fournit automatiquement ce service à l'application entière
  })

export class SurveyService{
    private readonly url = 'http://localhost:8080/api/survey/all';
    http = inject(HttpClient)

    public getSurveys(): Observable<Survey[]>{
        return this.http.get<Survey[]>(this.url)
    }
}