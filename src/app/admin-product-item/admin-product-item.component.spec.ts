import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductItemComponent } from './admin-product-item.component';

describe('AdminProductItemComponent', () => {
  let component: AdminProductItemComponent;
  let fixture: ComponentFixture<AdminProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProductItemComponent]
    });
    fixture = TestBed.createComponent(AdminProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
