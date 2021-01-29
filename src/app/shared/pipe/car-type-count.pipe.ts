import { Pipe, PipeTransform } from '@angular/core';

import { Car, CarSummary } from '../model/car';
import { CarTypePipe } from './car-type.pipe';

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
