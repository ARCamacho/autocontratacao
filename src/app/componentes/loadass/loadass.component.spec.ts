import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadassComponent } from './loadass.component';

describe('LoadassComponent', () => {
  let component: LoadassComponent;
  let fixture: ComponentFixture<LoadassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
