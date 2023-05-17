import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbecwlcComponent } from './ambecwlc.component';

describe('AmbecwlcComponent', () => {
  let component: AmbecwlcComponent;
  let fixture: ComponentFixture<AmbecwlcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbecwlcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbecwlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
