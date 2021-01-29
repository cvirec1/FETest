import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { addCar } from './car-reducer';
import { CarSelectorService } from './car-selector.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({cars: addCar})
  ],
  providers: [CarSelectorService]
})
export class CarStoreModule { }
