import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './survey-form.component.html',
  styleUrl: './survey-form.component.css'
})
export class SurveyFormComponent {

  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.surveyForm.valid) {

      this.surveyForm.reset(); // Réinitialiser le formulaire
    }
  }

}
