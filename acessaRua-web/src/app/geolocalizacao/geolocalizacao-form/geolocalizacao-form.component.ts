import { Component, OnInit } from '@angular/core';
import { GeolocalizacaoService, Geolocalizacao } from '../geolocalizacao.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-geolocalizacao-form',
  templateUrl: './geolocalizacao-form.component.html',
  styleUrls: ['./geolocalizacao-form.component.css'],
  providers: [GeolocalizacaoService]
})
export class GeolocalizacaoFormComponent implements OnInit {
  private title = 'Nova Geolocalizacao'
  private model : Geolocalizacao = new Geolocalizacao();
  private id : string
  constructor(
    private lo : GeolocalizacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.model = new Geolocalizacao();
    this.route.params.subscribe(
      params => {
        if(params['id']){
          this.id = params['id'];
          this.lo.obterPorId(this.id).subscribe(
            (existence: Geolocalizacao) => this.model = existence
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
        roteador.navigate(['/geolocalizacoes'])
      },
      function(erro){
        console.error(erro)
      }
    )
  }
}

 

