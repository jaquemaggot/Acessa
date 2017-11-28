import { Component, OnInit } from '@angular/core';
import { ComentarioService, Comentario } from '../comentario.service';
import { ImagemService, Imagem } from '../../imagem/imagem.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario-form',
  templateUrl: './comentario-form.component.html',
  styleUrls: ['./comentario-form.component.css'],
  providers: [ComentarioService, ImagemService]
})

export class ComentarioFormComponent implements OnInit {
  private title = 'Novo Comentario'
  private model : Comentario = new Comentario();
  private imagem : any
  private id : string
  constructor(
    private co : ComentarioService,
    private im : ImagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //console.log(this.imagem);
    this.model = new Comentario();
    //this.imagem = this.im.listarTudo();

    this.im.listarTudo().subscribe(data => {
      console.log(data);
      this.imagem = data;
    });

    this.route.params.subscribe(
      //Se exixtir um parâmetro id, significa que queremos editando um objeto já existente
      params => {
         if(params['id']){
           this.id = params['id'];
           this.co.obterPorId(this.id).subscribe(
             (existence: Comentario) => this.model = existence
           )
         }
      }
    )
  }

  enviar(){
    console.log('teste');
    // Preservando o roteador para evitar a perda de referência ao objeto.
    let roteador = this.router
    this.co.salvar(this.model).subscribe(
      function(){
        //após a inserção de um novo recurso , volta á pagina de listagem
        roteador.navigate(['/comentarios'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }
}
