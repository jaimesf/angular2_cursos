System.register(['angular2/core', 'angular2/common', './nuevocurso.component', 'angular2/platform/browser', './node_modules/ng2-bootstrap/ng2-bootstrap', './node_modules/ng2-table/ng2-table'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, nuevocurso_component_1, browser_1, ng2_bootstrap_1, ng2_table_1;
    var TableDemo, CURSOS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (nuevocurso_component_1_1) {
                nuevocurso_component_1 = nuevocurso_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_table_1_1) {
                ng2_table_1 = ng2_table_1_1;
            }],
        execute: function() {
            TableDemo = (function () {
                function TableDemo() {
                    this.rows = [];
                    this.columns = [
                        { title: 'Titulo', name: 'titulo', sort: 'asc' },
                        { title: 'Nivel', name: 'nivel', sort: false },
                        { title: 'Horas', name: 'horas', sort: false },
                    ];
                    this.data = CURSOS;
                    this.page = 1;
                    this.itemsPerPage = 10;
                    this.maxSize = 5;
                    this.numPages = 1;
                    this.length = this.data.length;
                    this.config = {
                        paging: true,
                        sorting: { columns: [] }
                    };
                    this.length = this.data.length;
                }
                TableDemo.prototype.ngOnInit = function () {
                    this.onChangeTable(this.config, null);
                };
                TableDemo.prototype.changePage = function (page, data) {
                    if (data === void 0) { data = this.data; }
                    console.log(page);
                    var start = (page.page - 1) * page.itemsPerPage;
                    var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
                    return data.slice(start, end);
                };
                TableDemo.prototype.changeSort = function (data, config) {
                    var _this = this;
                    if (!config.sorting) {
                        return data;
                    }
                    // simple sorting
                    return data.sort(function (previous, current) {
                        var columns = _this.config.sorting.columns || [];
                        for (var i = 0; i < columns.length; i++) {
                            var columnName = columns[i].name;
                            if (previous[columnName] > current[columnName]) {
                                return columns[i].sort === 'desc' ? -1 : 1;
                            }
                            if (previous[columnName] < current[columnName]) {
                                return columns[i].sort === 'asc' ? -1 : 1;
                            }
                        }
                        return 0;
                    });
                };
                TableDemo.prototype.onChangeTable = function (config, page) {
                    if (page === void 0) { page = config.paging; }
                    if (config.sorting) {
                        Object.assign(this.config.sorting, config.sorting);
                    }
                    var sortedData = this.changeSort(this.data, this.config);
                    //let pag= {"page": this.page,"itemsPerPage":10 }
                    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
                    this.length = sortedData.length;
                };
                TableDemo.prototype.newCurso = function () { browser_1.bootstrap(nuevocurso_component_1.NuevoCursoComponent); };
                TableDemo = __decorate([
                    core_1.Component({
                        selector: 'table-demo',
                        templateUrl: 'templates/table.html',
                        directives: [ng2_table_1.NG_TABLE_DIRECTIVES, ng2_bootstrap_1.PAGINATION_DIRECTIVES, common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableDemo);
                return TableDemo;
            })();
            exports_1("TableDemo", TableDemo);
            CURSOS = [
                { "id": 1, "titulo": "1Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 2, "titulo": "2Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 3, "titulo": "3Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 4, "titulo": "4Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 5, "titulo": "5Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 6, "titulo": "6Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 7, "titulo": "7Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 8, "titulo": "8Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "9Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "10Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "11Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "12Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "13Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "14Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "15Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "16Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "17Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "18Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
            ];
        }
    }
});
//# sourceMappingURL=table.component.js.map