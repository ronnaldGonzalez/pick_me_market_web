import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLayoutComponentComponent } from './navigation-layout-component.component';

describe('NavigationLayoutComponentComponent', () => {
  let component: NavigationLayoutComponentComponent;
  let fixture: ComponentFixture<NavigationLayoutComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationLayoutComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
