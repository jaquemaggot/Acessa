import { Component, OnInit } from '@angular/core';
import { LocaisService, Locais} from '../locais.service';
import { UsuarioService, Usuario } from '../../usuario/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locais-form',
  templateUrl: './locais-form.component.html',
  styleUrls: ['./locais-form.component.css'],
  providers: [LocaisService, UsuarioService]
})
export class LocaisFormComponent implements OnInit {
  private title = 'Novo Local'
  private model : Locais = new Locais();
  private usuario : any
  private id : string
  constructor(
    private lo : LocaisService,
    private us : UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.model = new Locais();
    this.usuario = this.us.listarTudo()
    this.route.params.subscribe(
      //Se exixtir um parâmetro id, significa que queremos editando um objeto já existente
      params => {
         if(params['id']){
           this.id = params['id'];
           this.lo.obterPorId(this.id).subscribe(
             (existence: Locais) => this.model = existence
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
        roteador.navigate(['/locais'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }
}
