import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { CarService } from 'src/app/core/car.service';
import { Car } from 'src/app/shared/model/car';

@Component({
  selector: 'app-sidebar-car-panel',
  templateUrl: './sidebar-car-panel.component.html',
  styleUrls: ['./sidebar-car-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarCarPanelComponent implements OnInit {

  cars: Car[];

  private allCars: Car[];
  private actualText = '';

  constructor(
    private carService: CarService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(_ => {
      this.allCars = _;
      this.onFilter(this.actualText);
      this.cdr.detectChanges();
    });
  }

  onFilter(text: string): void {
    this.actualText = text;

    this.actualText === '' ?
      this.cars = this.allCars :
      this.cars = this.allCars.filter((_) => _.productionYear === +this.actualText);
  }
}
