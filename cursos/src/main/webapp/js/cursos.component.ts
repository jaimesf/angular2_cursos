import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {NuevoCursoComponent} from './nuevocurso.component'
import {bootstrap}    from 'angular2/platform/browser'




import {TableDemo} from './table.component';



interface Profesor {
  id: number;
  nombreApellidos: string;
  
}

interface Curso {
  id: number;
  titulo: string;
  nivel: string;
  horas: number;
  activo: boolean;
  profesor: Profesor;
}





@Component({
    selector: 'cursos-activos',
    templateUrl: 'templates/cursos.html',
    directives: [
    	TableDemo
  ]
    
})
export class CursosComponent {
	
	
	
	
	newCurso() {bootstrap(NuevoCursoComponent);  }
	

 }


export default Curso;
