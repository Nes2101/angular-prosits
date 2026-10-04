import { Component, Input } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-conference-detail',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './conference-detail.html',
  styleUrl: './conference-detail.css'
})
export class ConferenceDetailComponent {

  @Input() conference: any;

}