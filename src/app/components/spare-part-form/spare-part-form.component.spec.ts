import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosFormComponent } from './spare-part-form.component';

describe('RepuestosFormComponent', () => {
  let component: RepuestosFormComponent;
  let fixture: ComponentFixture<RepuestosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepuestosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
