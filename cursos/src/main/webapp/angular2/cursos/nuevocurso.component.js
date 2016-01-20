System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'angular2/platform/browser', './cursos.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, browser_1, cursos_component_1;
    var NuevoCursoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            }],
        execute: function() {
            NuevoCursoComponent = (function () {
                function NuevoCursoComponent(http) {
                    var _this = this;
                    this.http = http;
                    this.profesores = [];
                    this.activo = false;
                    this.titulo = "";
                    this.nivel = "Básico";
                    this.horas = 1;
                    http.get('profesores')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.setProfesores(data); });
                }
                NuevoCursoComponent.prototype.setProfesores = function (data) {
                    this.profesores = data.profesores;
                    this.profesorId = this.profesores[0].id;
                };
                NuevoCursoComponent.prototype.createCurso = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.post('crearcurso', JSON.stringify({ 'activo': this.activo, titulo: this.titulo, nivel: this.nivel, horas: this.horas, profesorId: this.profesorId }), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (res) { return _this.callBackCrearProfesor(res); });
                };
                NuevoCursoComponent.prototype.callBackCrearProfesor = function (res) {
                    if (res.ok) {
                        browser_1.bootstrap(cursos_component_1.CursosComponent, [http_1.HTTP_PROVIDERS]);
                    }
                    else {
                        console.log(res);
                    }
                };
                NuevoCursoComponent = __decorate([
                    core_1.Component({
                        selector: 'cursos-activos',
                        templateUrl: 'templates/nuevocurso.html',
                        viewProviders: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NuevoCursoComponent);
                return NuevoCursoComponent;
            })();
            exports_1("NuevoCursoComponent", NuevoCursoComponent);
        }
    }
});
//# sourceMappingURL=nuevocurso.component.js.map