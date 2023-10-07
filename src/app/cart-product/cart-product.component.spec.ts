import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductComponent } from './cart-product.component';

describe('CartProductComponent', () => {
  let component: CartProductComponent;
  let fixture: ComponentFixture<CartProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartProductComponent]
    });
    fixture = TestBed.createComponent(CartProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
