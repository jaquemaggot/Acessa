import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { ImagemListarComponent } from './imagem/imagem-listar/imagem-listar.component';
import { LocaisListarComponent } from './locais/locais-listar/locais-listar.component';
import { GeolocalizacaoListarComponent } from './geolocalizacao/geolocalizacao-listar/geolocalizacao-listar.component';
import { GeolocalizacaoFormComponent } from './geolocalizacao/geolocalizacao-form/geolocalizacao-form.component';
import { LocaisFormComponent } from './locais/locais-form/locais-form.component';
import { ComentarioListarComponent } from './comentario/comentario-listar/comentario-listar.component';
import { ImagemFormComponent } from './imagem/imagem-form/imagem-form.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { ComentarioFormComponent } from './comentario/comentario-form/comentario-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios',  component: UsuarioListarComponent },
  { path: 'locais',  component: LocaisListarComponent },
  {path: 'locais/cadastrar', component: LocaisFormComponent},
  { path: 'geolocalizacoes',  component: GeolocalizacaoListarComponent },
  { path: 'geolocalizacoes/cadastrar',  component: GeolocalizacaoFormComponent },
  { path: 'imagens',  component: ImagemListarComponent },
  { path: 'imagens/cadastrar', component: ImagemFormComponent},
  { path: 'imagens/:id', component: ImagemFormComponent},
  { path: 'locais/:id', component: LocaisFormComponent},
  { path: 'comentarios',  component: ComentarioListarComponent },
  { path: 'usuarios/cadastrar', component: UsuarioFormComponent },
  { path: 'comentarios/cadastrar', component: ComentarioFormComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}