import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/car';

@Pipe({
  name: 'carType'
})
export class CarTypePipe implements PipeTransform {
  currentYear: number = new Date().getFullYear();

  transform(car: Car): string {
    return car.price > 20000 && (car.productionYear > this.currentYear - 5) ? 'Expensive' : 'Fair';
  }

}
