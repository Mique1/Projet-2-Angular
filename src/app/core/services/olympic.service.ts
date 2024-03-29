
import { Injectable, OnInit } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})

export class OlympicService implements OnInit{
 
  
   olympics$ = new BehaviorSubject<any>(undefined);
  
  constructor(private http: HttpClient){}   

   public ngOnInit(): void {
   
  }

    // getOlympics(): Observable<olympic[]> {
    //   return this.http.get<olympic[]>('api/olympics');
    // }

    // loadInitialData(): Observable<olympic[]> {
    //     return this.http.get<olympic[]>('api/olympics').pipe(
    //       tap((value) => this.olympics$.next(value)),
    //       catchError((error, caught) => {
    //         // TODO: improve error handling
    //         console.error(error);
    //         // can be useful to end loading state and let the user know something went wrong
    //         this.olympics$.next(null);
    //         return caught;
    //       })
    //     );
    //   }

    // getOlympics() {
    //     return this.olympics$.asObservable();
    // }
}