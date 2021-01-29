import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CarActions from '../store/car-actions';
import { Car } from '../shared/model/car';
import { CarSelectorService } from '../store/car-selector.service';
import { CarState } from '../store/car-state';
import { makeBrand, makeColor, makePrice, makeYear } from '../shared/helper/generateData';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars$: Observable<Car[]>;

  private carCounter = 1;

  constructor(
    private store: Store< {payload: CarState} >,
    private carSelectorService: CarSelectorService) {
    this.generateCars(300);
    this.cars$ = carSelectorService.getAllCars$();
  }

  private generateCars(count: number): void {
    for (let i = 0; i < count; i++) {
      this.store.dispatch(CarActions.createCarAction(this.generateCar()));
    }
  }

  private generateCar(): Car {
    return {
      id: this.carCounter++,
      brand: makeBrand(),
      color: makeColor(),
      price: makePrice(),
      productionYear: makeYear()
    } as Car;
  }

  getAllCars(): Observable<Car[]> {
    return this.carSelectorService.getAllCars$();
  }

  createCar(brandCar: string): void {
    const newCar = {
      id: this.carCounter++,
      brand : brandCar,
      color : makeColor(),
      price: makePrice(),
      productionYear: makeYear()
    }as Car;
    this.store.dispatch(CarActions.createCarAction(newCar));
  }
}
