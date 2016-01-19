import {Component, EventEmitter, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from 'angular2/common';
import {NuevoCursoComponent} from './nuevocurso.component'
import {bootstrap}    from 'angular2/platform/browser'
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';


import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';



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
    directives: [NG_TABLE_DIRECTIVES, PAGINATION_DIRECTIVES, NgClass, NgIf, CORE_DIRECTIVES, FORM_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]


})
export class TableDemo implements OnInit{


	public rows:Array<Curso> = [];
  	public columns:Array<any> = [
	    {title: 'Titulo', name: 'titulo', sort: 'asc'},
	    {title: 'Nivel', name: 'nivel', sort: false},
	    {title: 'Horas', name: 'horas', sort: false},

  	];

  	public data:Array<any> =[];

  	public page:number = 1;
  	public itemsPerPage:number = 10;
  	public maxSize:number = 5;
 	public numPages:number = 1;
  	public length:number = this.data.length;


  	public config:any = {
	    paging: true,
	    sorting: {columns: []}
	};




  	constructor(http: Http) {
    http.get('getcursos')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(data => this.setData(data.cursos));
      

	    
  	}
	
	setData(data:any){
	  this.data = data;
      this.length = this.data.length;
      this.onChangeTable(this.config, this.data);
	}
  	

  	ngOnInit() {

		this.onChangeTable(this.config, null);
		
	}

	changePage(page:any, data:Array<any> = this.data):Array<any> {
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
	    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
	    this.length = sortedData.length;
		}

	

 }
