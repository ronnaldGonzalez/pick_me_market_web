import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderDetailComponent } from './client-order-detail.component';

describe('ClientOrderDetailComponent', () => {
  let component: ClientOrderDetailComponent;
  let fixture: ComponentFixture<ClientOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrderDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
