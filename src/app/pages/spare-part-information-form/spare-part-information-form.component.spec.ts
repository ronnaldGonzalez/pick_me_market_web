import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartInformationFormComponent } from './spare-part-information-form.component';

describe('SparePartInformationFormComponent', () => {
  let component: SparePartInformationFormComponent;
  let fixture: ComponentFixture<SparePartInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparePartInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
