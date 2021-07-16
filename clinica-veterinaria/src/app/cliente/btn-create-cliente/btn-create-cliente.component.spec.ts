import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCreateClienteComponent } from './btn-create-cliente.component';

describe('BtnCreateClienteComponent', () => {
  let component: BtnCreateClienteComponent;
  let fixture: ComponentFixture<BtnCreateClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnCreateClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
