import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosatendimentoComponent } from './posatendimento.component';

describe('PosatendimentoComponent', () => {
  let component: PosatendimentoComponent;
  let fixture: ComponentFixture<PosatendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosatendimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosatendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
