import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/model/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent implements OnInit {
  @Input() carList: Car[];

  constructor() { }

  ngOnInit(): void {
  }

}
