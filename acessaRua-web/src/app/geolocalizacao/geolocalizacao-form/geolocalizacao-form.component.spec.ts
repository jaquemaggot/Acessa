import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalizacaoFormComponent } from './geolocalizacao-form.component';

describe('GeolocalizacaoFormComponent', () => {
  let component: GeolocalizacaoFormComponent;
  let fixture: ComponentFixture<GeolocalizacaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocalizacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocalizacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
