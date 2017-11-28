import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Locais {
  public _id : String;
  public endereco : String;
  public bairro : String;
  public cep : Number;
  public imagem : String;
  public usuario : String;
  public localizacao : String;
}
@Injectable()
export class LocaisService {

  constructor(private http : HttpClient) { }
  listarTudo(){
    return this.http.get(environment.urlApi + '/locais');
  }
  public salvar(dados: Locais){
    
    if(dados._id) {
      console.log('teste2');
      return this.http.put('http://localhost:3000/locais/' + dados._id, dados)

    }
    else{
      console.log('teste9');
      return this.http.post(`${environment.urlApi}/locais`, dados);
      
    }
    
  }

  public obterPorId(id: string){
    return this.http.get('http://localhost:3000/locais/' + id);
  }
  public excluir(id:string){
    return this.http.delete('http://localhost:3000/locais/' + id);
  }
}
