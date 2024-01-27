import { TestBed } from '@angular/core/testing';

// import { OlympicService } from './olympic.service';
import { mainOlympicService } from './mainOlympicService';

describe('OlympicService', () => {
  let service: mainOlympicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(mainOlympicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


//Original
// import { TestBed } from '@angular/core/testing';

// import { OlympicService } from './olympic.service';

// describe('OlympicService', () => {
//   let service: OlympicService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(OlympicService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

