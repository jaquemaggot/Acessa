import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ComentarioListarComponent } from './comentario-listar/comentario-listar.component';
import{ AppRoutingModule } from '../app-routing.module';

import { ComentarioFormComponent } from './comentario-form/comentario-form.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    ComentarioListarComponent,
    ComentarioFormComponent
  ],
  exports: [
    ComentarioListarComponent
  ]
})
export class ComentarioModule { }
