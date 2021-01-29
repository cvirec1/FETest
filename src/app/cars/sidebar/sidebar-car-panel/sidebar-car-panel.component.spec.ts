import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCarPanelComponent } from './sidebar-car-panel.component';

describe('SidebarCarPanelComponent', () => {
  let component: SidebarCarPanelComponent;
  let fixture: ComponentFixture<SidebarCarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCarPanelComponent ]
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
