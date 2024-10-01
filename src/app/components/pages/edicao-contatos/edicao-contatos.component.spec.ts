import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoContatosComponent } from './edicao-contatos.component';

describe('EdicaoContatosComponent', () => {
  let component: EdicaoContatosComponent;
  let fixture: ComponentFixture<EdicaoContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoContatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
