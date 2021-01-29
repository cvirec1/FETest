import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from '../shared/model/car';
import { CarState } from './car-state';

export const cars = (state: {cars: CarState}) => state.cars.cars;

export const allCars = createSelector(cars, _ => _);

@Injectable({
    providedIn: 'root'
  })
  export class CarSelectorService {

    constructor(private store: Store<{cars: CarState}>) {
    }

    getAllCars$(): Observable<Car[]> {
      return this.store.select(allCars);
    }
  }
