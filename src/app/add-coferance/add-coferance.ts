
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConferanceService } from '../services/conferance';

@Component({
  selector: 'app-add-coferance',
  imports: [ReactiveFormsModule],
  templateUrl: './add-coferance.html',
  styleUrl: './add-coferance.css',
})
export class AddCoferance {
  private fb = inject(FormBuilder);
  private conferenceService = inject(ConferanceService);
  private router = inject(Router);

  conferanceForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    location: ['', Validators.required],
    date: ['', Validators.required],
    price: [0, Validators.required],
    nbPlaces: [0, Validators.required]
  });

  addConferance() {
    if (this.conferanceForm.invalid) {
      return;
    }

    this.conferenceService
      .addConferance(this.conferanceForm.getRawValue())
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }
}
