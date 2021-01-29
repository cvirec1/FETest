import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarAddComponent } from './car-content/car-add/car-add.component';
import { CarContentComponent } from './car-content/car-content.component';

const routes: Routes = [
  {
    path: '', component: CarContentComponent,
    children: [
      {
        path: '',
        component: CarAddComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
