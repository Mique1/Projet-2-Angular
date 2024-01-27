import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { mainOlympicService } from 'src/app/core/services/mainOlympicService';
import { OlympicData } from 'src/assets/mock/olympicData';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  olympics$:( Olympic| Participation)[] = OlympicData 
  // olympics$: Observable<(Olympic |Participation)[]>| undefined;
  

  constructor(private mainOlympicService: mainOlympicService) {}

  ngOnInit(): void {
    //  this.olympicsSubject$ = this.mainOlympicService.getOlympics();
    this.mainOlympicService.getOlympics()
     .subscribe( olympics$ => this.olympics$ =  olympics$ ) 
    }
}
    
  
  

