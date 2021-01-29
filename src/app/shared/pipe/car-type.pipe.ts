import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/car';

@Pipe({
  name: 'carType'
})
export class CarTypePipe implements PipeTransform {

  transform(car: Car): string {
    return car.price > 20000 && car.productionYear > 2016 ? 'Expensive' : 'Fair';
  }

}
