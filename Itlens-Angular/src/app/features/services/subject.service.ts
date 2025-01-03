import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from '../models/subject.model';


@Injectable({
    providedIn: 'root', // Fournit automatiquement ce service à l'application entière
  })

export class SubjectService{
    private readonly url = 'http://localhost:8080/api/subject';
    http = inject(HttpClient)

    public getSubjectById(id: string): Observable<Subject>{
        return this.http.get<Subject>(`${this.url}/${id}`)
    }

}