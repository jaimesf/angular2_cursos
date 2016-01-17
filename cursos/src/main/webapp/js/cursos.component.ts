import {Component} from 'angular2/core';
import {NuevoCursoComponent} from './nuevocurso.component'
import {bootstrap}    from 'angular2/platform/browser'

interface Profesor {
  id: number;
  nombreApellidos: string;
  
}

interface Curso {
  id: number;
  titulo: string;
  nivel: string;
  horas: number;
  activo: number;
  profesor: Profesor;
}





@Component({
    selector: 'cursos-activos',
    templateUrl: 'templates/cursos.html'
    
})
export class CursosComponent {
	public cursos = CURSOS;
	
	newCurso() {bootstrap(NuevoCursoComponent);  }

 }

var CURSOS: Curso[] = [
  { "id": 1, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 2, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 3, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 4, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 5, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 6, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 7, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 8, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1 , "profesor": { "id":1, "nombreApellidos": "Uno"} },
];

export default Curso;
