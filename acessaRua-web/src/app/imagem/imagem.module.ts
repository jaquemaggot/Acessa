import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//thiago diz que é recomendado dar espaço.
import { ImagemListarComponent } from './imagem-listar/imagem-listar.component';
import { ImagemFormComponent } from './imagem-form/imagem-form.component';
import { FormsModule } from '@angular/forms'
import{ AppRoutingModule } from '../app-routing.module';

@NgModule({
  //uso os módulos
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  //uso os componentes
  declarations: [
    ImagemListarComponent,
    ImagemFormComponent

  ],
  exports: [
    ImagemListarComponent,
    ImagemFormComponent
  ]
})
export class ImagemModule { }
