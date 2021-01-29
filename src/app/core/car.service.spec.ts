import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';

import { cars } from '../shared/mock/car.mock';
import { CarSelectorService } from '../store/car-selector.service';
import { CarService } from './car.service';

describe('CarService', () => {
  const carSelectorServiceMock = jasmine.createSpyObj('CarSelectorService', ['getAllCars$']);
  carSelectorServiceMock.getAllCars$.and.returnValue(of(cars));

  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CarSelectorService,
          useValue: carSelectorServiceMock
        },
        provideMockStore({})
      ]
    });
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
