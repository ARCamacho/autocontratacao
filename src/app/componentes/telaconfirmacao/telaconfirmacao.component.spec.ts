import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaconfirmacaoComponent } from './telaconfirmacao.component';

describe('TelaconfirmacaoComponent', () => {
  let component: TelaconfirmacaoComponent;
  let fixture: ComponentFixture<TelaconfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaconfirmacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaconfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
