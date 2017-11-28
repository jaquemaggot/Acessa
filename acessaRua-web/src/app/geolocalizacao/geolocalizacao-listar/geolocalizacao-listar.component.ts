import { Component, OnInit } from '@angular/core';
import { GeolocalizacaoService } from '../geolocalizacao.service';

@Component({
  selector: 'app-geolocalizacao-listar',
  templateUrl: './geolocalizacao-listar.component.html',
  styleUrls: ['./geolocalizacao-listar.component.css']
})
export class GeolocalizacaoListarComponent implements OnInit { 
    geolocalizacoes : any;
    constructor(private geolocalizacaoService : GeolocalizacaoService) { }
    //this eu refencio alguma váriavel que está dentro da classe atual.
    ngOnInit() {
      //this referencia a variavel geolocalizacao.
      this.geolocalizacaoService.listarTudo().subscribe( data => {
        console.log(data);
        this.geolocalizacoes = data;
      });
      this.atualizarLista()
    }
    atualizarLista(){
      this.geolocalizacaoService.listarTudo().subscribe(dados => this.geolocalizacoes = dados)
    }
    excluir(id: string){
      if(confirm('Deseja realmente exlcuir este Local?')){
        this.geolocalizacaoService.excluir(id).subscribe(
          () => this.atualizarLista(),
          erro => console.error(erro)
        )
      } 
    }
}
