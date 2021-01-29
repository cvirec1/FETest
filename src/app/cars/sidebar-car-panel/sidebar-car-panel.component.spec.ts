import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CarService } from 'src/app/core/car.service';
import { CarListStubComponent } from 'src/app/shared/mock/car-list-stub.component';
import { CarSearchStubComponent } from 'src/app/shared/mock/car-search-stub.component';
import { CarSummaryStubComponent } from 'src/app/shared/mock/car-summary-stub.component';
import { cars } from 'src/app/shared/mock/car.mock';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarCarPanelComponent } from './sidebar-car-panel.component';

describe('SidebarCarPanelComponent', () => {
  const carServiceSpy = jasmine.createSpyObj('CarService', ['getAllCars']);
  const getAllCarSpy = carServiceSpy.getAllCars.and.returnValue(of(cars));

  let component: SidebarCarPanelComponent;
  let fixture: ComponentFixture<SidebarCarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [
        SidebarCarPanelComponent,
        CarSearchStubComponent,
        CarListStubComponent,
        CarSummaryStubComponent
      ],
      providers: [
        {
          provide: CarService,
          useValue: carServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
