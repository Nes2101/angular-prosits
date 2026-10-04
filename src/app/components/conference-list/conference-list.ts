import { Component, Output, EventEmitter, signal } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-conference-list',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceListComponent {

  @Output() conferenceSelected = new EventEmitter<any>();

  conferences = signal([
    {
      id: 1,
      title: 'Angular Conference',
      description: 'Conférence sur Angular et le développement web moderne.',
      date: '2026-10-15',
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75
    },
    {
      id: 2,
      title: 'Java Conference',
      description: 'Conférence dédiée au développement Java et Spring Boot.',
      date: '2026-10-20',
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 25
    },
    {
      id: 3,
      title: 'AI Conference',
      description: 'Conférence sur l’intelligence artificielle et le Machine Learning.',
      date: '2026-10-25',
      place: 'Sfax',
      maxParticipants: 50,
      nbParticipants: 45
    },
    {
      id: 4,
      title: 'Old Conference',
      description: 'Cette conférence est déjà passée.',
      date: '2025-10-10',
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 50
    }
  ]);

  selectConference(conference: any) {
    this.conferenceSelected.emit(conference);
  }
}