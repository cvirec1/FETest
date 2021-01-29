import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { SidebarCarPanelStubComponent } from 'src/app/shared/mock/sidebar-car-panel-stub.component';
import { CarContentComponent } from './car-content.component';

describe('CarContentComponent', () => {
  let component: CarContentComponent;
  let fixture: ComponentFixture<CarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule
      ],
      declarations: [
        CarContentComponent,
        SidebarCarPanelStubComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
