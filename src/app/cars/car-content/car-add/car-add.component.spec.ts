import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CarService } from 'src/app/core/car.service';
import { CarAddComponent } from './car-add.component';

describe('CarAddComponent', () => {
  const carServiceSpy = jasmine.createSpyObj('CarService', ['createCar']);
  let component: CarAddComponent;
  let fixture: ComponentFixture<CarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CarAddComponent
      ],
      providers: [
        {
          provide: CarService,
          useValue: carServiceSpy
        },
        {
          provide: FormBuilder,
          usevalue: {}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
