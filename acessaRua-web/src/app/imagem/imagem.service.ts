import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

export class Imagem {
  public _id : String;
  public url : String;
  public usuario : String;
}

@Injectable()
export class ImagemService {

  constructor(private http: HttpClient) { }
  //em angular não é preciso colocar function, apenas colocar o nome e  abrir e fechar parenteses.().
  listarTudo(){
    return this.http.get(environment.urlApi + '/imagens');
  }

  public salvar(dados: Imagem){
    
    if(dados._id) {
      console.log('teste2');
      return this.http.put('http://localhost:3000/imagens/' + dados._id, dados)

    }
    else{
      console.log('teste9');
      return this.http.post(`${environment.urlApi}/imagens`, dados);
      
    }
  }
  public obterPorId(id: string){
    return this.http.get('http://localhost:3000/imagens/' + id);
  }
  public excluir(id:string){
    return this.http.delete('http://localhost:3000/imagens/' + id);
  }
}
