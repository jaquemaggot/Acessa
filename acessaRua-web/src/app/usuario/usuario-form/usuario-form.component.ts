import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from '../../usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  providers: [ UsuarioService ]
})
export class UsuarioFormComponent implements OnInit {
  private title = 'Novo Usuario'
  private model : Usuario = new Usuario();
  private id : string
  constructor(
    private us : UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.model = new Usuario();
    this.route.params.subscribe(
      //Se exixtir um parâmetro id, significa que queremos editando um objeto já existente
      params => {
         if(params['id']){
           this.id = params['id'];
           this.us.obterPorId(this.id).subscribe(
             (existence: Usuario) => this.model = existence
           )
         }
      }
    )
  }
  enviar(){
    console.log('teste');
    // Preservando o roteador para evitar a perda de referência ao objeto.
    let roteador = this.router
    this.us.salvar(this.model).subscribe(
      function(){
        //após a inserção de um novo recurso , volta á pagina de listagem
        roteador.navigate(['/usuarios'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }
}


