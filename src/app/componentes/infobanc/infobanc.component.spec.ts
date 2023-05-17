import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobancComponent } from './infobanc.component';

describe('InfobancComponent', () => {
  let component: InfobancComponent;
  let fixture: ComponentFixture<InfobancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobancComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
