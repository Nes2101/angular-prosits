
import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConferanceService } from '../services/conferance';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList implements OnInit {
  conferances = signal<any[]>([]);
  conferenceService = inject(ConferanceService);

  ngOnInit() {
    this.conferenceService.getAll().subscribe(data => {
      this.conferances.set(data);
    });
  }

  deleteConferance(id: number) {
    this.conferenceService.deleteConferance(id).subscribe(() => {
      this.conferances.update(list =>
        list.filter(conf => conf.id !== id)
      );
    });
  }
}
