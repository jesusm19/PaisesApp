import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesInputComponent } from './paises-input.component';

describe('PaisesInputComponent', () => {
  let component: PaisesInputComponent;
  let fixture: ComponentFixture<PaisesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
