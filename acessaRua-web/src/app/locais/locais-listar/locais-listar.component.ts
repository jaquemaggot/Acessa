import { Component, OnInit } from '@angular/core';
import { LocaisService } from '../locais.service';

@Component({
  selector: 'app-locais-listar',
  templateUrl: './locais-listar.component.html',
  styleUrls: ['./locais-listar.component.css']
})

export class LocaisListarComponent implements OnInit {

  locais : any;
  constructor(private locaisService : LocaisService) { }

  ngOnInit() {
    this.locaisService.listarTudo().subscribe( data => {
      this.locais = data;
    });
    this.atualizarLista()
  }
  atualizarLista(){
    this.locaisService.listarTudo().subscribe(dados => this.locais = dados)
  }
  excluir(id: string){
    if(confirm('Deseja realmente exlcuir este Local?')){
      this.locaisService.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    } 
  }

}
