import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from '../models/subject.model';
import { Question } from "../models/question.model";


@Injectable({
    providedIn: 'root', // Fournit automatiquement ce service à l'application entière
  })

export class QuestionService{
    private readonly url = 'http://localhost:8080/api/question';
    http = inject(HttpClient)

    public getQuestionById(id: string): Observable<Question>{
        return this.http.get<Question>(`${this.url}/${id}`)
    }

}