import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductControversyComponent } from './product-controversy.component';

describe('ProductControversyComponent', () => {
  let component: ProductControversyComponent;
  let fixture: ComponentFixture<ProductControversyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductControversyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductControversyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
