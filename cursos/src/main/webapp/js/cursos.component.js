System.register(['angular2/core', './nuevocurso.component', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nuevocurso_component_1, browser_1;
    var CursosComponent, CURSOS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nuevocurso_component_1_1) {
                nuevocurso_component_1 = nuevocurso_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            CursosComponent = (function () {
                function CursosComponent() {
                    this.cursos = CURSOS;
                }
                CursosComponent.prototype.newCurso = function () { browser_1.bootstrap(nuevocurso_component_1.NuevoCursoComponent); };
                CursosComponent = __decorate([
                    core_1.Component({
                        selector: 'cursos-activos',
                        templateUrl: 'templates/cursos.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CursosComponent);
                return CursosComponent;
            })();
            exports_1("CursosComponent", CursosComponent);
            CURSOS = [
                { "id": 1, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 2, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 3, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 4, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 5, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 6, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 7, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 8, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 9, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": 1, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
            ];
        }
    }
});
//# sourceMappingURL=cursos.component.js.map