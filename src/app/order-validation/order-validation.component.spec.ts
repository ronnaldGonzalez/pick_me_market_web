import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderValidationComponent } from './order-validation.component';

describe('OrderValidationComponent', () => {
  let component: OrderValidationComponent;
  let fixture: ComponentFixture<OrderValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
