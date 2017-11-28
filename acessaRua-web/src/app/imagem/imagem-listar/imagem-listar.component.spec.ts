import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemListarComponent } from './imagem-listar.component';

describe('ImagemListarComponent', () => {
  let component: ImagemListarComponent;
  let fixture: ComponentFixture<ImagemListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
