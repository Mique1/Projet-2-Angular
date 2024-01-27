import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, PartialObserver, map } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class mainOlympicService {
 
  private olympics$ = new BehaviorSubject<Olympic[]>([])

    constructor(private http: HttpClient) {}

    loadInitialData(): Observable<Olympic[]> {
      return this.http.get<Olympic[]>('/api/olympics').pipe(
        tap((olympics) => {
          this.olympics$.next(olympics);
          console.log('Olympic data loaded successfully:', olympics);
        }),
        catchError((error) => {
          console.error('Error loading Olympic data:', error);
          this.olympics$.next([]);
          throw error; // Re-throw the error to propagate it further
        })
      );
    }
    
    getOlympics(){
        return this.olympics$.asObservable();
    }
}
