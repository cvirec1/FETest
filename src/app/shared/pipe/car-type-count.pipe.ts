import { Pipe, PipeTransform } from '@angular/core';

import { Car } from '../model/car';
import { CarSummary } from '../model/carSummary';

@Pipe({
  name: 'carTypeCount'
})
export class CarTypeCountPipe implements PipeTransform {
  summaryCars: CarSummary[];
  transform(cars: Car[]): CarSummary[] {
    let fair = 0;
    let expensive = 0;
    cars.forEach(car => {
      car.price > 20000 && car.productionYear > 2016 ? expensive++ : fair++;
    });
    this.summaryCars = [{
      description: 'Expensive',
      count: expensive}];

    this.summaryCars = [{
      description: 'Fair',
      count: fair}, ...this.summaryCars];
    return this.summaryCars;
  }

}
