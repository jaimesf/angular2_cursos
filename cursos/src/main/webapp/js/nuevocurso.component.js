System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NuevoCursoComponent, PROFESORES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NuevoCursoComponent = (function () {
                function NuevoCursoComponent() {
                    this.profesores = PROFESORES;
                }
                NuevoCursoComponent = __decorate([
                    core_1.Component({
                        selector: 'cursos-activos',
                        templateUrl: 'templates/nuevocurso.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NuevoCursoComponent);
                return NuevoCursoComponent;
            })();
            exports_1("NuevoCursoComponent", NuevoCursoComponent);
            PROFESORES = [
                { "id": 1, "nombreApellidos": "Jaime S" },
                { "id": 2, "nombreApellidos": "Jaime F" },
                { "id": 3, "nombreApellidos": "Jaime M" }
            ];
        }
    }
});
//# sourceMappingURL=nuevocurso.component.js.map