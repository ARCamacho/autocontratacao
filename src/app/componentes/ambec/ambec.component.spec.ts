import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbecComponent } from './ambec.component';

describe('AmbecComponent', () => {
  let component: AmbecComponent;
  let fixture: ComponentFixture<AmbecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
