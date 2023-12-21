import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalModalComponent } from './sucursal-modal.component';

describe('SucursalModalComponent', () => {
  let component: SucursalModalComponent;
  let fixture: ComponentFixture<SucursalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucursalModalComponent]
    });
    fixture = TestBed.createComponent(SucursalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
