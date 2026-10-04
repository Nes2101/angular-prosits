import { Component } from '@angular/core';
import { ConferenceListComponent } from '../../components/conference-list/conference-list';
import { ConferenceDetailComponent } from '../../components/conference-detail/conference-detail';

@Component({
  selector: 'app-conferences',
  imports: [
    ConferenceListComponent,
    ConferenceDetailComponent
  ],
  templateUrl: './conferences.html',
  styleUrl: './conferences.css'
})
export class ConferencesComponent {

  selectedConference: any = null;

  selectConference(conference: any) {
    this.selectedConference = conference;
  }

}