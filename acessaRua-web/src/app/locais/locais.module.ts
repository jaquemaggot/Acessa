import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {LocaisListarComponent } from './locais-listar/locais-listar.component';
import{ AppRoutingModule } from '../app-routing.module';

import { LocaisFormComponent } from './locais-form/locais-form.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    LocaisListarComponent,
    LocaisFormComponent
  ],
  exports: [
    LocaisListarComponent
  ]
})
export class LocaisModule { }
