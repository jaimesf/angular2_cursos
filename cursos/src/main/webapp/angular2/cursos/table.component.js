System.register(['angular2/core', 'angular2/common', 'angular2/http', 'rxjs/add/operator/map', 'ng2-bootstrap/ng2-bootstrap', 'ng2-table/ng2-table'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, ng2_bootstrap_1, ng2_table_1;
    var TableDemo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (ng2_table_1_1) {
                ng2_table_1 = ng2_table_1_1;
            }],
        execute: function() {
            TableDemo = (function () {
                function TableDemo(http) {
                    var _this = this;
                    this.rows = [];
                    this.columns = [
                        { title: 'Titulo', name: 'titulo', sort: 'asc' },
                        { title: 'Nivel', name: 'nivel', sort: false },
                        { title: 'Horas', name: 'horas', sort: false },
                    ];
                    this.data = [];
                    this.page = 1;
                    this.itemsPerPage = 10;
                    this.maxSize = 5;
                    this.numPages = 1;
                    this.length = this.data.length;
                    this.config = {
                        paging: true,
                        sorting: { columns: [] }
                    };
                    http.get('getcursos')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.setData(data.cursos); });
                }
                TableDemo.prototype.setData = function (data) {
                    this.data = data;
                    this.length = this.data.length;
                    this.onChangeTable(this.config, this.data);
                };
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
                    console.log(this.data);
                    var sortedData = this.changeSort(this.data, this.config);
                    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
                    this.length = sortedData.length;
                };
                TableDemo = __decorate([
                    core_1.Component({
                        selector: 'table-demo',
                        templateUrl: 'templates/table.html',
                        directives: [ng2_table_1.NG_TABLE_DIRECTIVES, ng2_bootstrap_1.PAGINATION_DIRECTIVES, common_1.NgClass, common_1.NgIf, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TableDemo);
                return TableDemo;
            })();
            exports_1("TableDemo", TableDemo);
        }
    }
});
//# sourceMappingURL=table.component.js.map