import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../../core/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarService
  ) {
    this.form = fb.group({
      name: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    });
  }

  ngOnInit(): void {
    this.form.controls.name.valueChanges.subscribe(val => console.log(val));
  }

  addCar(): void{
    if (this.form.valid) {
      this.carService.createCar(this.form.value);
      this.form.reset();
    }
  }

}
