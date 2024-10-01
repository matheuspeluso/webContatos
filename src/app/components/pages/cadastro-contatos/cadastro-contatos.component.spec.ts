import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroContatosComponent } from './cadastro-contatos.component';

describe('CadastroContatosComponent', () => {
  let component: CadastroContatosComponent;
  let fixture: ComponentFixture<CadastroContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroContatosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
