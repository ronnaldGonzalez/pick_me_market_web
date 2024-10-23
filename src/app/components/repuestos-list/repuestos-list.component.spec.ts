import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepuestosListComponent } from './repuestos-list.component';

describe('RepuestosListComponent', () => {
  let component: RepuestosListComponent;
  let fixture: ComponentFixture<RepuestosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepuestosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepuestosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
