import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServContratadoComponent } from './serv-contratado.component';

describe('ServContratadoComponent', () => {
  let component: ServContratadoComponent;
  let fixture: ComponentFixture<ServContratadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServContratadoComponent]
    });
    fixture = TestBed.createComponent(ServContratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
