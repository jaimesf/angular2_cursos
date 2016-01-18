import {Component, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from 'angular2/common';
import {NuevoCursoComponent} from './nuevocurso.component'
import {bootstrap}    from 'angular2/platform/browser'

import {PAGINATION_DIRECTIVES} from './node_modules/ng2-bootstrap/ng2-bootstrap';

import {NG_TABLE_DIRECTIVES} from './node_modules/ng2-table/ng2-table';



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
    selector: 'table-demo',
    templateUrl: 'templates/table.html',
    directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES]
    
})
export class TableDemo implements OnInit{
	
	
	public rows:Array<Curso> = [];
  	public columns:Array<any> = [
	    {title: 'Titulo', name: 'titulo', sort: 'asc'},
	    {title: 'Nivel', name: 'nivel', sort: false},
	    {title: 'Horas', name: 'horas', sort: false},
	    
  	];
  	
  	private data:Array<Curso> = CURSOS;
  	
  	public page:number = 1;
  	public itemsPerPage:number = 10;
  	public maxSize:number = 5;
 	public numPages:number = 1;
  	public length:number = this.data.length;
  	
  	public config:any = {
	    paging: true,
	    sorting: {columns: []}
	};
	
	

  	constructor() {
    	this.length = this.data.length;
  	}
  	
  	ngOnInit() {
		this.onChangeTable(this.config, null);
	}
	
	changePage(page:any, data:Array<any> = this.data):Array<any> {
		console.log(page);
	    let start = (page.page - 1) * page.itemsPerPage;
	    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
	    return data.slice(start, end);
	}
	
	
	changeSort(data:any, config:any) {
	    if (!config.sorting) {
	      return data;
	    }
	
	    // simple sorting
	    return data.sort((previous:any, current:any) => {
	      let columns = this.config.sorting.columns || [];
	      for (let i = 0; i < columns.length; i++) {
	        let columnName = columns[i].name;
	
	        if (previous[columnName] > current[columnName]) {
	          return columns[i].sort === 'desc' ? -1 : 1;
	        }
	        if (previous[columnName] < current[columnName]) {
	          return columns[i].sort === 'asc' ? -1 : 1;
	        }
	      }
	      return 0;
	    });
	  }
	
	  	
  	onChangeTable(config:any, page:any = config.paging) {
	   
	    if (config.sorting) {
	      Object.assign(this.config.sorting, config.sorting);
	    }
	
	    let sortedData = this.changeSort(this.data, this.config);
	    //let pag= {"page": this.page,"itemsPerPage":10 }
	    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
	    this.length = sortedData.length;
	}
	
	newCurso() {bootstrap(NuevoCursoComponent);  }

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
  { "id": 9, "titulo": "10Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "11Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "12Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "13Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "14Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "15Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "16Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "17Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "18Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true , "profesor": { "id":1, "nombreApellidos": "Uno"} },
  
];

export default Curso;
