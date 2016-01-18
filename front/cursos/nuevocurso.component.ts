import {Component} from 'angular2/core';

interface Profesor {
  id: number;
  nombreApellidos: string;
  
}


@Component({
    selector: 'cursos-activos',
    templateUrl: 'templates/nuevocurso.html'
    
})
export class NuevoCursoComponent {

	public profesores = PROFESORES;


 }
var PROFESORES: Profesor[] = [
  { "id": 1, "nombreApellidos": "Jaime S"},
  { "id": 2, "nombreApellidos": "Jaime F"},
  { "id": 3, "nombreApellidos": "Jaime M"}
];

