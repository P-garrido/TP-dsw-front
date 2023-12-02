import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicesComponent } from './admin-services.component';

describe('AdminServicesComponent', () => {
  let component: AdminServicesComponent;
  let fixture: ComponentFixture<AdminServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminServicesComponent]
    });
    fixture = TestBed.createComponent(AdminServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
