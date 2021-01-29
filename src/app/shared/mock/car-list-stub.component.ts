import { Component, Input } from '@angular/core';

import { cars } from 'src/app/store/car-selector.service';

@Component({
    selector: 'app-car-list',
    template: '',
  })
  export class CarListStubComponent{
      @Input() carList = cars;
  }
