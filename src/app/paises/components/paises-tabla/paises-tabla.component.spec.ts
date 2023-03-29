import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesTablaComponent } from './paises-tabla.component';

describe('PaisesTablaComponent', () => {
  let component: PaisesTablaComponent;
  let fixture: ComponentFixture<PaisesTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
