import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
//thiago recomenda dar espaço por boas práticas do angular.
import { environment } from '../../environments/environment';

export class Geolocalizacao {
  public _id : String;
  public latitude : Number;
  public longitude : Number;
  public zoom : Number;
}

@Injectable()
export class GeolocalizacaoService {

  constructor(private http: HttpClient) { }
  //em angular não é preciso colocar function, apenas colocar o nome e  abrir e fechar parenteses.().
  listarTudo(){
    return this.http.get(environment.urlApi + '/geolocalizacoes');
  }
  public salvar(dados: Geolocalizacao){
    if(dados._id) {
      console.log('teste2');
      return this.http.put('http://localhost:3000/geolocalizacoes/' + dados._id, dados)

    }
    else{
      console.log('teste9');
      return this.http.post(`${environment.urlApi}/geolocalizacoes`, dados);
      
    }
    
  }

  public obterPorId(id: string){
    return this.http.get('http://localhost:3000/geolocalizacoes/' + id);
  }
  public excluir(id:string){
    return this.http.delete('http://localhost:3000/geolocalizacoes/' + id);
  }
}
