import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoIconComponent } from './carrito-icon.component';

describe('CarritoIconComponent', () => {
  let component: CarritoIconComponent;
  let fixture: ComponentFixture<CarritoIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
