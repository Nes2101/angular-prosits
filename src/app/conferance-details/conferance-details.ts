
import { Component, input, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConferanceService } from '../services/conferance';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails implements OnInit {
  conference: any;
  id = input.required<string>();

  private conferenceService = inject(ConferanceService);
  private r = inject(Router);

  ngOnInit() {
    const id = Number(this.id());

    this.conferenceService.getById(id).subscribe(data => {
      this.conference = data;
    });
  }

  goBack() {
    this.r.navigate(['/list']);
  }
}
