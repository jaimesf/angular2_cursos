import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {bootstrap} from 'angular2/platform/browser'
import {CursosComponent} from './cursos.component'




@Component({
    selector: 'cursos-activos',
    templateUrl: 'templates/nuevocurso.html',
    viewProviders: [HTTP_PROVIDERS]
    
})
export class NuevoCursoComponent {

	
	public profesores = [];
	public activo:boolean = false;
	public profesorId:number;
	public titulo:string = "";
	public nivel:string="Básico";
	public horas:number=1;
	
	
	
	constructor(public http: Http) {
    http.get('profesores')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => this.setProfesores(data));
      	    
  	}
  	
  	setProfesores(data:any){
  		this.profesores = data.profesores;
  		this.profesorId = this.profesores[0].id;
  	}
  	
  	createCurso(){
  		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('crearprofesor', 
                       JSON.stringify({'activo': this.activo,titulo:this.titulo,nivel:this.nivel,horas:this.horas,profesorId: this.profesorId}),
                       {headers:headers})
    		.map(res => res.json())
    		.subscribe(res => this.callBackCrearProfesor(res));
  	
  	}
  	
  	callBackCrearProfesor(res:any){
  		if(res.ok){
  			bootstrap(CursosComponent,[HTTP_PROVIDERS]);  
  		}else{
  			console.log(res);
  		}
  	
  	}


 }


