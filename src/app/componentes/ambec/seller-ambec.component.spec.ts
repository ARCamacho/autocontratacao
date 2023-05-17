import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller } from './seller-ambec.component';

describe('SellerAmbecComponent', () => {
  let component: SellerAmbecComponent;
  let fixture: ComponentFixture<SellerAmbecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAmbecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAmbecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
