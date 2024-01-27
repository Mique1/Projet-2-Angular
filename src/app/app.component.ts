import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
// import { OlympicService } from './core/services/olympic.service';

import { mainOlympicService } from './core/services/mainOlympicService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mainOlympicService: mainOlympicService) {}

  ngOnInit(){
    this.mainOlympicService.loadInitialData().pipe(take(1)).subscribe();
    // this.mainOlympicService.getOlympics().pipe(take(1)).subscribe();
    // this.mainOlympicService.getParticipations().pipe(take(1)).subscribe();
  }
}
