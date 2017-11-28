import { Component, OnInit } from '@angular/core';
import { ImagemService } from '../imagem.service';
@Component({
  selector: 'app-imagem-listar',
  templateUrl: './imagem-listar.component.html',
  styleUrls: ['./imagem-listar.component.css']
})
export class ImagemListarComponent implements OnInit {
  
    imagens : any;
    constructor(private imagemService : ImagemService) { }
    //this eu refencio alguma váriavel que está dentro da classe atual.
    ngOnInit() {
      this.imagemService.listarTudo().subscribe( data => {
        this.imagens = data;
      });
       this.atualizarLista()
    }

    atualizarLista(){
      this.imagemService.listarTudo().subscribe(dados => this.imagens = dados)
    }
    excluir(id: string){
      if(confirm('Deseja realmente exlcuir este Local?')){
        this.imagemService.excluir(id).subscribe(
          () => this.atualizarLista(),
          erro => console.error(erro)
        )
      } 
    }
  
  }
