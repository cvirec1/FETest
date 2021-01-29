import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarSearchComponent implements OnInit {
  @Output() filterCars: EventEmitter<string> = new EventEmitter();

  priorityFilter = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.priorityFilter.valueChanges
    .pipe(
        debounceTime(50),
        distinctUntilChanged()
    )
    .subscribe(value => {
        this.filterCars.emit(value);
    });
  }

}
