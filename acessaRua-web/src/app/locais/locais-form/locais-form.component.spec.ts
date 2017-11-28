import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisFormComponent } from './locais-form.component';

describe('LocaisFormComponent', () => {
  let component: LocaisFormComponent;
  let fixture: ComponentFixture<LocaisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
