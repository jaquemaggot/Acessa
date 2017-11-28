import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

import { LocaisService } from './locais/locais.service';
import { LocaisModule } from './locais/locais.module';

import { ImagemModule } from './imagem/imagem.module';
import { ImagemService } from './imagem/imagem.service';

import { GeolocalizacaoModule } from './geolocalizacao/geolocalizacao.module';
import { GeolocalizacaoService } from './geolocalizacao/geolocalizacao.service';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ComentarioService } from './comentario/comentario.service';
import { ComentarioModule } from './comentario/comentario.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    UsuarioModule,
    AppRoutingModule,
    LocaisModule,
    ImagemModule,
    GeolocalizacaoModule,
    ComentarioModule

  ],
  providers: [
    UsuarioService,
    LocaisService,
    ImagemService,
    GeolocalizacaoService,
    ComentarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
