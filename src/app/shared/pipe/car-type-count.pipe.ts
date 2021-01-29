import { Pipe, PipeTransform } from '@angular/core';

import { Car, CarSummary } from '../model/car';

@Pipe({
  name: 'carTypeCount'
})
export class CarTypeCountPipe implements PipeTransform {
  summaryCars: CarSummary[];

  transform(value: Car[]): CarSummary[] {
    this.summaryCars = [{
      description: 'Fair',
      count: value.filter(_ => (_.price < 20000 && _.productionYear > 2016)).length} as CarSummary];

    this.summaryCars = [{
      description: 'Expensive',
      count: value.filter(_ => (_.price > 20000 && _.productionYear < 2016)).length} as CarSummary];
    return this.summaryCars;
  }

}
