import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CarSummary } from 'src/app/shared/model/carSummary';

@Component({
  selector: 'app-car-summary',
  templateUrl: './car-summary.component.html',
  styleUrls: ['./car-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarSummaryComponent implements OnInit {
  @Input() summaryCars: CarSummary[];

  constructor() { }

  ngOnInit(): void {
  }

}
