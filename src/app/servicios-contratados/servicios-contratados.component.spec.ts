import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosContratadosComponent } from './servicios-contratados.component';

describe('ServiciosContratadosComponent', () => {
  let component: ServiciosContratadosComponent;
  let fixture: ComponentFixture<ServiciosContratadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosContratadosComponent]
    });
    fixture = TestBed.createComponent(ServiciosContratadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
