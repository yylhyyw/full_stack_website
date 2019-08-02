import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsActiveListComponent } from './products-active-list.component';

describe('ProductsActiveListComponent', () => {
  let component: ProductsActiveListComponent;
  let fixture: ComponentFixture<ProductsActiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsActiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
