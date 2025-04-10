import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFormComponent } from './sidebar-form.component';

describe('SidebarFormComponent', () => {
  let component: SidebarFormComponent;
  let fixture: ComponentFixture<SidebarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
