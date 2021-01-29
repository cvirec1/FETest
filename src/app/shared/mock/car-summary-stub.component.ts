import { Component, Input } from '@angular/core';

import { carSummary } from './car-summary.mock';

@Component({
    selector: 'app-car-summary',
    template: '',
  })
  export class CarSummaryStubComponent{
      @Input() summaryCars = carSummary;
  }
