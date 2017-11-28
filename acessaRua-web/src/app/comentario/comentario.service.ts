import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Comentario {
  public _id : String;
  public texto : String;
  public usuario : String;
}

@Injectable()
export class ComentarioService {

  constructor(private http: HttpClient){ }
  listarTudo(){
    return this.http.get(environment.urlApi + '/comentarios');
  }
  public salvar(dados: Comentario){
    if(dados._id) {
      console.log('teste2');
      return this.http.put('http://localhost:3000/comentarios/' + dados._id, dados)

    }
    else{
      console.log('teste9');
      return this.http.post(`${environment.urlApi}/comentarios`, dados);
      
    }
  }
  public obterPorId(id: string){
    return this.http.get('http://localhost:3000/comentarios/' + id);
  }
  public excluir(id:string){
    return this.http.delete('http://localhost:3000/comentarios/' + id);
  }
}