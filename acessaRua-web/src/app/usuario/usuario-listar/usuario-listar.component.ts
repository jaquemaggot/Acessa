import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})

export class UsuarioListarComponent implements OnInit {

  usuarios : any;
  constructor(private usuarioService : UsuarioService) { }
  //this eu refencio alguma váriavel que está dentro da classe atual.
  ngOnInit() {
    this.usuarioService.listarTudo().subscribe( data => {
      this.usuarios = data;
    });
  }

}
