import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalizacaoListarComponent } from './geolocalizacao-listar.component';

describe('GeolocalizacaoListarComponent', () => {
  let component: GeolocalizacaoListarComponent;
  let fixture: ComponentFixture<GeolocalizacaoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacaoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalizacaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
