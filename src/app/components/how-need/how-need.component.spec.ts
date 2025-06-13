import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowNeedComponent } from './how-need.component';

describe('HowNeedComponent', () => {
  let component: HowNeedComponent;
  let fixture: ComponentFixture<HowNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowNeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
