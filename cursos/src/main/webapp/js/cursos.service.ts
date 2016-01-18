import {Injectable} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Http} from './node_modules/angular2/http';
import * as Rx from "rxjs/Rx";
  


class Profesor {
  id: number;
  nombreApellidos: string;
  constructor(id: number, nombreApellidos: string) {
      this.id = id;
      this.nombreApellidos = nombreApellidos;
      
    }
}

class Curso {
  id: number;
  titulo: string;
  nivel: string;
  horas: number;
  activo: boolean;
  profesor: Profesor;
  
  constructor(id: number, 
                titulo: string,
                nivel: string,
                horas: number,
                activo: boolean,
                profesorid: number,
                profesornombre: string) {
      this.id = id;
      this.titulo = titulo;
      this.nivel = nivel;
      this.horas = horas;
      this.activo = activo;
      this.profesor = new Profesor(profesorid,profesornombre);
    }
}

@Injectable()
export class CursosService {

	

	/*constructor(@Inject(Http) public http: Http) {
	   console.log('Task Service created.', http);
	 }*/
	 
  getCursos() {
    return Promise.resolve(CURSOS);
  }
  
  /*getCursosAjax() {
    // return an observable
    return this.http.get('/cursos/cursos').map( (responseData) => {
    	console.log(responseData.json());
      return responseData.json();
    })
    .map((cursos: Array<any>) => {
      let result:Array<Curso> = [];
      console.log(cursos);
      if (cursos) {
        cursos.forEach((curso) => {
          result.push(
                     new Curso(curso.id, 
                              curso.titulo,
                              curso.nivel,
                              curso.horas,
                              curso.activo,
                              curso.profesor.id,
                              curso.profesor.nombreApellidos));
        });
      }
      return result;
    });
  }*/

}

var CURSOS: Curso[] = [
  { "id": 1, "titulo": "1Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 2, "titulo": "2Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 3, "titulo": "3Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 4, "titulo": "4Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 5, "titulo": "5Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 6, "titulo": "6Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 7, "titulo": "7Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 8, "titulo": "8Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "9Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 10, "titulo": "10Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 11, "titulo": "11Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 12, "titulo": "12Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 13, "titulo": "13Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 14, "titulo": "14Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 15, "titulo": "15Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 16, "titulo": "16Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 17, "titulo": "17Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 18, "titulo": "18Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 19, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 20, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 21, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 22, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 23, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 24, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 25, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 26, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 27, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 28, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 29, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  
];