import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditClienteComponent } from './btn-edit-cliente.component';

describe('BtnEditClienteComponent', () => {
  let component: BtnEditClienteComponent;
  let fixture: ComponentFixture<BtnEditClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
