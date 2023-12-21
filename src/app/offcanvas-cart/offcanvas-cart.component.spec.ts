import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasCartComponent } from './offcanvas-cart.component';

describe('OffcanvasCartComponent', () => {
  let component: OffcanvasCartComponent;
  let fixture: ComponentFixture<OffcanvasCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffcanvasCartComponent]
    });
    fixture = TestBed.createComponent(OffcanvasCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
