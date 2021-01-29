import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { makeBrand } from 'src/app/shared/helper/generateData';
import { CarService } from '../../../core/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarService
  ) {
    this.form = fb.group({
      brand: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  ngOnInit(): void {
    this.form.controls.brand.valueChanges.subscribe(val => console.log(val));
  }

  addCar(): void{
    this.form.valid ? this.createCar() : this.carService.createCar(makeBrand());
  }

  private createCar(): void {
    this.carService.createCar(this.form.value.brand);
    this.form.reset();
  }

}
