import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';




@Component({
    selector: 'cursos-activos',
    templateUrl: 'templates/nuevocurso.html',
    viewProviders: [HTTP_PROVIDERS]
    
})
export class NuevoCursoComponent {

	public profesores = [];
	
	constructor(http: Http) {
    http.get('/cursos/profesores')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => this.profesores = data.profesores);
      

	    
  	}


 }


