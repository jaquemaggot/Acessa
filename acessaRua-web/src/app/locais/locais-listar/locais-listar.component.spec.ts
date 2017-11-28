import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisListarComponent } from './locais-listar.component';

describe('LocaisListarComponent', () => {
  let component: LocaisListarComponent;
  let fixture: ComponentFixture<LocaisListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
