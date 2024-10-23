import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInfoComponent } from './vehicle-info.component';

describe('VehicleInfoComponent', () => {
  let component: VehicleInfoComponent;
  let fixture: ComponentFixture<VehicleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
