import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfertaComponent } from './menu-oferta.component';

describe('MenuOfertaComponent', () => {
  let component: MenuOfertaComponent;
  let fixture: ComponentFixture<MenuOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
