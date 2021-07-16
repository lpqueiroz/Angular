import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDeleteClienteComponent } from './btn-delete-cliente.component';

describe('BtnDeleteClienteComponent', () => {
  let component: BtnDeleteClienteComponent;
  let fixture: ComponentFixture<BtnDeleteClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnDeleteClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnDeleteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
