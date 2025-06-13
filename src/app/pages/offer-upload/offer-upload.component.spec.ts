import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferUploadComponent } from './offer-upload.component';

describe('OfferUploadComponent', () => {
  let component: OfferUploadComponent;
  let fixture: ComponentFixture<OfferUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
