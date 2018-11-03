import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// esto es para que sirva el map, si no no funciona
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

  result: any;
  constructor(private http: HttpClient) { }

  addUsuario(name, email, phone_number) {
    // aqui tendriamos que poner nuestro endpoint
    const uri = 'https://ertourister.appspot.com/user';
    // duda de para que es el objeto 
    const obj = {
      name: name,
      email: email,
      phone_number: phone_number
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Nuevo usuario creado'));
  }




  getUsuarios() {
    //const uri = 'http://localhost:4000/coins';
    const uri = 'https://ertourister.appspot.com/user';
    return this
            .http
            .get(uri)
            // duda de para que chihuahuas es el map 
            .map(res => {
              return res;
            });
  }

  deleteUsuario(id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;

        return this
            .http
            .delete(uri)
            .map(res => {
              console.log("deleted ");
              return res;
            });
  }

  editUsuarios(id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateUsuarios(name, email, phone_number,id) {
    const uri = 'https://ertourister.appspot.com/user/' + id;

    const obj = {
      name: name,
      email: email,
      phone_number: phone_number
    };
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
      
  }


}
