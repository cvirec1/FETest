import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarListComponent } from './sidebar/sidebar-car-panel/car-list/car-list.component';
import { CarSearchComponent } from './sidebar/sidebar-car-panel/car-search/car-search.component';
import { CarSummaryComponent } from './sidebar/sidebar-car-panel/car-summary/car-summary.component';
import { CarAddComponent } from './car-content/car-add/car-add.component';
import { CarContentComponent } from './car-content/car-content.component';
import { SidebarCarPanelComponent } from './sidebar/sidebar-car-panel/sidebar-car-panel.component';

const COMPONENTS = [
    CarListComponent,
    CarSearchComponent,
    CarSummaryComponent,
    CarAddComponent,
    CarContentComponent,
    SidebarCarPanelComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule,
    SharedModule
  ],
  exports: [...COMPONENTS]
})
export class CarsModule { }
