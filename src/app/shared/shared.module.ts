
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarTypeCountPipe } from './pipe/car-type-count.pipe';
import { CarTypePipe } from './pipe/car-type.pipe';

const COMPONENTS = [CarTypeCountPipe, CarTypePipe];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule { }
