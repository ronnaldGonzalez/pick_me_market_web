import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOffersComponent } from './product-offers.component';

describe('ProductOffersComponent', () => {
  let component: ProductOffersComponent;
  let fixture: ComponentFixture<ProductOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
