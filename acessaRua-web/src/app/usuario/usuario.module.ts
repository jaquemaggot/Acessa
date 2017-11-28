import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import{ AppRoutingModule } from '../app-routing.module';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { FormsModule } from '@angular/forms'


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
    UsuarioListarComponent,
    UsuarioFormComponent
  ],
  exports: [
    UsuarioListarComponent,
  ]
})
export class UsuarioModule { }
