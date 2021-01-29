import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarsModule } from '../cars/cars.module';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome.component';

const COMPONENTS = [WelcomeComponent, NavbarComponent];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CarsModule
  ],
  exports: [...COMPONENTS]
})
export class WelcomeModule { }
