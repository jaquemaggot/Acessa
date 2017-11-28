import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Usuario {
  public _id: String;
  public nome: String;
  public telefone: String;
  public login: String;
  public senha: String
}

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }
  //em angular não é preciso colocar function, apenas colocar o nome e  abrir e fechar parenteses.().
  listarTudo(){
    return this.http.get(environment.urlApi + '/usuarios');
  }
  public salvar(dados: Usuario){
    
    if(dados._id) {
      console.log('teste2');
      return this.http.put('http://localhost:3000/usuarios/' + dados._id, dados)

    }
    else{
      console.log('teste9');
      return this.http.post(`${environment.urlApi}/usuarios`, dados);
      
    }
    
  }
  public obterPorId(id: string){
    return this.http.get('http://localhost:3000/usuarios/' + id);
  }
  public excluir(id:string){
    return this.http.delete('http://localhost:3000/usuarios/' + id);
  }
}

