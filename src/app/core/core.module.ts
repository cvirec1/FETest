import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarStoreModule } from '../store/car-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarStoreModule
  ]
})
export class CoreModule { }
