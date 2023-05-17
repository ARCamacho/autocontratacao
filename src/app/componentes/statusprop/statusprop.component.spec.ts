import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuspropComponent } from './statusprop.component';

describe('StatuspropComponent', () => {
  let component: StatuspropComponent;
  let fixture: ComponentFixture<StatuspropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatuspropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatuspropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
