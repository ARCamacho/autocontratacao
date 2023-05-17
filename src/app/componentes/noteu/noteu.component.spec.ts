import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteuComponent } from './noteu.component';

describe('NoteuComponent', () => {
  let component: NoteuComponent;
  let fixture: ComponentFixture<NoteuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
