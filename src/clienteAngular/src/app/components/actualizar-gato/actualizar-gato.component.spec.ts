import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarGatoComponent } from './actualizar-gato.component';

describe('ActualizarGatoComponent', () => {
  let component: ActualizarGatoComponent;
  let fixture: ComponentFixture<ActualizarGatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarGatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
