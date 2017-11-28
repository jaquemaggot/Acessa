import { Component, OnInit } from '@angular/core';
import { ImagemService, Imagem } from '../imagem.service';
import { UsuarioService, Usuario } from '../../usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-imagem-form',
  templateUrl: './imagem-form.component.html',
  styleUrls: ['./imagem-form.component.css'],
  providers: [ImagemService, UsuarioService]
})
export class ImagemFormComponent implements OnInit {
  private title = 'Nova Imagem'
  private model : Imagem = new Imagem();
  private usuario : any
  private id : string
  constructor(
    private lo : ImagemService,
    private us : UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.model = new Imagem();
    this.usuario = this.us.listarTudo()
    this.route.params.subscribe(
      //Se exixtir um parâmetro id, significa que queremos editando um objeto já existente
      params => {
         if(params['id']){
           this.id = params['id'];
           this.lo.obterPorId(this.id).subscribe(
             (existence: Imagem) => this.model = existence
           )
         }
      }
    )
  }
  enviar(){
    console.log('teste');
    // Preservando o roteador para evitar a perda de referência ao objeto.
    let roteador = this.router
    this.lo.salvar(this.model).subscribe(
      function(){
        //após a inserção de um novo recurso , volta á pagina de listagem
        roteador.navigate(['/imagens'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }
}

