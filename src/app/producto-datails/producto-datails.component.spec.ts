import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoDatailsComponent } from './producto-datails.component';

describe('ProductoDatailsComponent', () => {
  let component: ProductoDatailsComponent;
  let fixture: ComponentFixture<ProductoDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
