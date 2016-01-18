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
    var Profesor, Curso, CursosService, CURSOS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Profesor = (function () {
                function Profesor(id, nombreApellidos) {
                    this.id = id;
                    this.nombreApellidos = nombreApellidos;
                }
                return Profesor;
            })();
            Curso = (function () {
                function Curso(id, titulo, nivel, horas, activo, profesorid, profesornombre) {
                    this.id = id;
                    this.titulo = titulo;
                    this.nivel = nivel;
                    this.horas = horas;
                    this.activo = activo;
                    this.profesor = new Profesor(profesorid, profesornombre);
                }
                return Curso;
            })();
            CursosService = (function () {
                function CursosService() {
                }
                /*constructor(@Inject(Http) public http: Http) {
                   console.log('Task Service created.', http);
                 }*/
                CursosService.prototype.getCursos = function () {
                    return Promise.resolve(CURSOS);
                };
                CursosService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CursosService);
                return CursosService;
            })();
            exports_1("CursosService", CursosService);
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
                { "id": 10, "titulo": "10Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 11, "titulo": "11Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 12, "titulo": "12Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 13, "titulo": "13Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 14, "titulo": "14Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 15, "titulo": "15Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 16, "titulo": "16Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 17, "titulo": "17Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 18, "titulo": "18Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 19, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 20, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 21, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 22, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 23, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 24, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 25, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 26, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 27, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 28, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
                { "id": 29, "titulo": "Mr. Nice", "nivel": "alto", "horas": 23, "activo": true, "profesor": { "id": 1, "nombreApellidos": "Uno" } },
            ];
        }
    }
});
//# sourceMappingURL=cursos.service.js.map