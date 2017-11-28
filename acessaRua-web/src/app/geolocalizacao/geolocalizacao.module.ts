import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
//thiago diz que é recomendado dar espaço.
import { GeolocalizacaoListarComponent } from './geolocalizacao-listar/geolocalizacao-listar.component';
import{ AppRoutingModule } from '../app-routing.module';

import { GeolocalizacaoFormComponent } from './geolocalizacao-form/geolocalizacao-form.component';
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
    GeolocalizacaoListarComponent,
    GeolocalizacaoFormComponent
  ],
  exports: [
    GeolocalizacaoListarComponent
  ]
})
export class GeolocalizacaoModule { }
