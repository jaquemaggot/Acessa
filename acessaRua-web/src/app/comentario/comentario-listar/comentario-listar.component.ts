import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-listar',
  templateUrl: './comentario-listar.component.html',
  styleUrls: ['./comentario-listar.component.css']
})
export class ComentarioListarComponent implements OnInit {

  comentarios : any;
  constructor(private comentarioService : ComentarioService) { }
  //this eu refencio alguma váriavel que está dentro da classe atual.
  ngOnInit() {
    this.comentarioService.listarTudo().subscribe( data => {
      this.comentarios = data;
      console.log(`teste: `, this.comentarios);
    });
    this.atualizarLista();
  }
  atualizarLista(){
    this.comentarioService.listarTudo().subscribe(dados => this.comentarios = dados)
  }
  excluir(id: string){
    if(confirm('Deseja realmente exlcuir este Local?')){
      this.comentarioService.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    } 
  }
}
