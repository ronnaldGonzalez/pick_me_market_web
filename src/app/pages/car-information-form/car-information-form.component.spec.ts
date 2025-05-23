import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoFormComponent } from './car-information-form.component';

describe('CarInfoFormComponent', () => {
  let component: CarInfoFormComponent;
  let fixture: ComponentFixture<CarInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
